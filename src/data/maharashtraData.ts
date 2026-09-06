import { DistrictData, VerificationCandidate, OutcomeStageNode } from '../types';

export const MAHARASHTRA_DISTRICTS_DATA: DistrictData[] = [
  {
    id: 'Pune',
    name: 'Pune',
    marathiName: 'पुणे',
    division: 'Pune',
    totalTrainees: 42800,
    certifiedTrainees: 38100,
    employedTrainees: 27580,
    selfEmployedTrainees: 4560,
    seekingEmploymentTrainees: 3420,
    droppedOutTrainees: 4700,
    untraceableTrainees: 1540,
    furtherEducationTrainees: 1000,
    completionRate: 89.0,
    employmentRate: 72.4,
    selfEmploymentRate: 12.0,
    retentionRate: 81.6,
    threeMonthRetentionRate: 89.4,
    twelveMonthRetentionRate: 74.2,
    skillGapIntensity: 34.5,
    topSkillGap: 'Industry-Specific Technical Skills (EV & PLC Automation)',
    topSkillGaps: [
      {
        id: 'pune-gap-1',
        name: 'Electric Vehicle (EV) Powertrain & Battery Diagnostics',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 3200,
        gapPercentage: 42,
        employerDemandSurge: '+64% demand in Chakan & Bhosari auto clusters',
        recommendedAction: 'Equip government ITIs with modern 48V/400V EV test rigs and co-op apprenticeships.'
      },
      {
        id: 'pune-gap-2',
        name: 'Industrial IoT & SCADA Programming',
        category: 'Digital & Automation',
        severity: 'Moderate',
        affectedTrainees: 2450,
        gapPercentage: 36,
        employerDemandSurge: '+48% demand across tier-1 auto component makers',
        recommendedAction: 'Incorporate Siemens / Rockwell certified micro-credentials into standard diploma programs.'
      },
      {
        id: 'pune-gap-3',
        name: 'Corporate Communication & Cross-Functional Collaboration',
        category: 'Soft Skills',
        severity: 'Moderate',
        affectedTrainees: 4100,
        gapPercentage: 29,
        employerDemandSurge: 'Essential for IT-BPM and customer technical support roles in Hinjawadi',
        recommendedAction: 'Mandatory 40-hour communicative English & professional conduct module.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'AUTO-MECH-04',
        name: 'Automotive Mechatronics Technician',
        enrolled: 4200,
        certified: 3910,
        placed: 2980,
        placementRate: 76.2,
        primaryDeficit: 'Lack of hands-on calibration experience with CAN bus protocols.'
      },
      {
        code: 'IT-FSD-01',
        name: 'Junior Cloud Developer & Full Stack Assistant',
        enrolled: 3800,
        certified: 3420,
        placed: 2490,
        placementRate: 72.8,
        primaryDeficit: 'Curriculum outdated on containerization and cloud orchestration.'
      },
      {
        code: 'LOG-WH-02',
        name: 'Automated Warehouse Inventory Associate',
        enrolled: 2900,
        certified: 2610,
        placed: 1880,
        placementRate: 72.0,
        primaryDeficit: 'Enterprise ERP scanning and RFID system unfamiliarity.'
      }
    ],
    recommendedIntervention: 'Expand employer-linked practical apprenticeship model with Chakan MIDC and sanction 15 AI-supported Industry 4.0 centers of excellence.',
    interventionStrategy: {
      priority: 'Immediate (0-30 Days)',
      keyActions: [
        'Mandate 60 days shop-floor internship for all Tier-2 skilling institutes.',
        'Integrate dual certification with Automotive Skills Development Council (ASDC).',
        'Activate biometric-linked real-time attendance and DigiLocker verifiable credentials.'
      ],
      partnerAgencies: ['MIDC Pune', 'Tata Motors Skill Academy', 'MSSDS', 'Bajaj Auto'],
      budgetEstimateLakhs: 480,
      expectedOutcomeLift: '+9.4% in 6-month retention rate'
    },
    primaryIndustrialClusters: ['Chakan Auto Hub', 'Hinjawadi IT Park', 'Talegaon Industrial Area', 'Bhosari MIDC'],
    activeTrainingCentres: 142,
    averageStartingSalaryMonthly: 21500,
    femaleParticipationRate: 41.2,
    epfoVerificationRate: 88.5
  },
  {
    id: 'Mumbai',
    name: 'Mumbai',
    marathiName: 'मुंबई',
    division: 'Konkan',
    totalTrainees: 49500,
    certifiedTrainees: 45000,
    employedTrainees: 35325,
    selfEmployedTrainees: 4050,
    seekingEmploymentTrainees: 3600,
    droppedOutTrainees: 4500,
    untraceableTrainees: 1125,
    furtherEducationTrainees: 900,
    completionRate: 90.9,
    employmentRate: 78.5,
    selfEmploymentRate: 9.0,
    retentionRate: 84.2,
    threeMonthRetentionRate: 91.0,
    twelveMonthRetentionRate: 79.5,
    skillGapIntensity: 28.2,
    topSkillGap: 'Fintech Tooling, Data Analytics & High-Value Services',
    topSkillGaps: [
      {
        id: 'mum-gap-1',
        name: 'Financial Advisory & Regulatory Compliance (KYC/AML)',
        category: 'Domain Specific',
        severity: 'High',
        affectedTrainees: 4200,
        gapPercentage: 35,
        employerDemandSurge: '+55% demand across NBFCs and digital wealth management platforms',
        recommendedAction: 'Introduce NISM / SEBI aligned certified financial services curriculum.'
      },
      {
        id: 'mum-gap-2',
        name: 'Critical Care & Specialized Allied Healthcare',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 3100,
        gapPercentage: 38,
        employerDemandSurge: '+49% demand in tertiary care hospitals and diagnostic chains',
        recommendedAction: 'Partner with KEM, Sion, and Lilavati hospitals for live clinical rotations.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'BFSI-CRM-01',
        name: 'BFSI Customer Relationship Executive',
        enrolled: 6400,
        certified: 5950,
        placed: 4880,
        placementRate: 82.0,
        primaryDeficit: 'Handling digital banking query escalations and fraud detection.'
      },
      {
        code: 'MED-GDA-02',
        name: 'General Duty Assistant (Healthcare)',
        enrolled: 5200,
        certified: 4800,
        placed: 3930,
        placementRate: 81.9,
        primaryDeficit: 'Electronic Health Record (EHR) entry and sterile protocol drills.'
      }
    ],
    recommendedIntervention: 'Form specialized FinTech and Healthcare consortiums to co-create real-time apprenticeships with guaranteed wage escalation upon 6-month completion.',
    interventionStrategy: {
      priority: 'Immediate (0-30 Days)',
      keyActions: [
        'Deploy DigiLocker verifiable credentials to cut onboarding friction by 70%.',
        'Establish 24/7 post-placement distress helplines to curb metro commute fatigue.',
        'Link trainees to PM SVANidhi microcredit for transition to gig-entrepreneurship.'
      ],
      partnerAgencies: ['BFSI Sector Skill Council', 'State Health Department', 'BSE Institute'],
      budgetEstimateLakhs: 520,
      expectedOutcomeLift: '+6.8% placement conversion in BFSI'
    },
    primaryIndustrialClusters: ['BKC Financial District', 'SEEPZ Andheri', 'Navi Mumbai Infotech Corridor', 'Lower Parel'],
    activeTrainingCentres: 168,
    averageStartingSalaryMonthly: 23800,
    femaleParticipationRate: 46.5,
    epfoVerificationRate: 91.2
  },
  {
    id: 'Thane',
    name: 'Thane',
    marathiName: 'ठाणे',
    division: 'Konkan',
    totalTrainees: 34200,
    certifiedTrainees: 30400,
    employedTrainees: 22192,
    selfEmployedTrainees: 3648,
    seekingEmploymentTrainees: 2736,
    droppedOutTrainees: 3800,
    untraceableTrainees: 1216,
    furtherEducationTrainees: 608,
    completionRate: 88.9,
    employmentRate: 73.0,
    selfEmploymentRate: 12.0,
    retentionRate: 79.8,
    threeMonthRetentionRate: 88.0,
    twelveMonthRetentionRate: 72.1,
    skillGapIntensity: 36.4,
    topSkillGap: 'Supply Chain Management & Precision Chemical Handling',
    topSkillGaps: [
      {
        id: 'thane-gap-1',
        name: 'Chemical Plant Process & HAZMAT Safety',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 2100,
        gapPercentage: 45,
        employerDemandSurge: '+42% demand in Dombivli & Wagle Estate chemical zones',
        recommendedAction: 'Conduct VR-simulated HAZMAT response and OSHA certified workshops.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'LOG-SUP-01',
        name: 'Supply Chain & Inventory Coordinator',
        enrolled: 4100,
        certified: 3700,
        placed: 2810,
        placementRate: 75.9,
        primaryDeficit: 'Knowledge of WMS software and dispatch batch management.'
      }
    ],
    recommendedIntervention: 'Subsidize employer apprentice stipends for logistics hubs along Bhiwandi-Kalyan corridor and upgrade safety labs in Dombivli.',
    interventionStrategy: {
      priority: 'Medium-term (1-3 Months)',
      keyActions: [
        'Form logistics training hub in Bhiwandi warehousing zone.',
        'Institute safety compliance certifications for chemical manufacturing apprentices.'
      ],
      partnerAgencies: ['Logistics Sector Skill Council', 'Dombivli Industrial Association'],
      budgetEstimateLakhs: 310,
      expectedOutcomeLift: '+8.1% in formal manufacturing employment'
    },
    primaryIndustrialClusters: ['Bhiwandi Warehousing Hub', 'Wagle Estate IT/Engg', 'Dombivli MIDC', 'Ambernath'],
    activeTrainingCentres: 104,
    averageStartingSalaryMonthly: 19800,
    femaleParticipationRate: 38.7,
    epfoVerificationRate: 84.1
  },
  {
    id: 'Nagpur',
    name: 'Nagpur',
    marathiName: 'नागपूर',
    division: 'Nagpur',
    totalTrainees: 31500,
    certifiedTrainees: 27100,
    employedTrainees: 18482,
    selfEmployedTrainees: 3794,
    seekingEmploymentTrainees: 3252,
    droppedOutTrainees: 4400,
    untraceableTrainees: 1084,
    furtherEducationTrainees: 488,
    completionRate: 86.0,
    employmentRate: 68.2,
    selfEmploymentRate: 14.0,
    retentionRate: 74.5,
    threeMonthRetentionRate: 83.2,
    twelveMonthRetentionRate: 66.8,
    skillGapIntensity: 43.1,
    topSkillGap: 'Multi-Modal Logistics, Solar Grid Engineering & Aviation MRO',
    topSkillGaps: [
      {
        id: 'nagpur-gap-1',
        name: 'Aviation Maintenance Support & Ground Handling',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1800,
        gapPercentage: 48,
        employerDemandSurge: '+72% demand in MIHAN SEZ aerospace and cargo maintenance hubs',
        recommendedAction: 'Partner with Air India MRO and Boeing facilities in MIHAN for live aircraft apprenticeships.'
      },
      {
        id: 'nagpur-gap-2',
        name: 'Commercial Cold Chain Logistics & Refrigeration Tech',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 2200,
        gapPercentage: 41,
        employerDemandSurge: '+50% demand at Nagpur Central Multi-Modal Logistics Park',
        recommendedAction: 'Establish dedicated cold-chain simulation testing labs.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'AERO-MRO-01',
        name: 'Aircraft Structure & Line Maintenance Assistant',
        enrolled: 2400,
        certified: 2050,
        placed: 1410,
        placementRate: 68.8,
        primaryDeficit: 'Strict aerospace tool tracking and avionics documentation standards.'
      },
      {
        code: 'SOL-TECH-03',
        name: 'Solar PV Grid System Installer',
        enrolled: 3100,
        certified: 2700,
        placed: 1890,
        placementRate: 70.0,
        primaryDeficit: 'High-voltage inverter synchronization and net-metering protocols.'
      }
    ],
    recommendedIntervention: 'Anchor training outcomes directly to MIHAN aerospace and logistics zone employers with performance-based payment to training partners based on 6-month retention.',
    interventionStrategy: {
      priority: 'Immediate (0-30 Days)',
      keyActions: [
        'Roll out joint certification with MIHAN SEZ Authority.',
        'Deploy automated Aadhaar-linked attendance and employer salary slip verification.'
      ],
      partnerAgencies: ['MIHAN India Ltd', 'MSSDS Vidarbha', 'Solar Energy Corp'],
      budgetEstimateLakhs: 390,
      expectedOutcomeLift: '+11.2% in retention at logistics facilities'
    },
    primaryIndustrialClusters: ['MIHAN SEZ', 'Butibori Industrial Area', 'Hingna MIDC', 'Kalmeshwar'],
    activeTrainingCentres: 92,
    averageStartingSalaryMonthly: 18200,
    femaleParticipationRate: 35.4,
    epfoVerificationRate: 79.4
  },
  {
    id: 'Nashik',
    name: 'Nashik',
    marathiName: 'नाशिक',
    division: 'Nashik',
    totalTrainees: 28400,
    certifiedTrainees: 24990,
    employedTrainees: 17843,
    selfEmployedTrainees: 3498,
    seekingEmploymentTrainees: 2499,
    droppedOutTrainees: 3410,
    untraceableTrainees: 750,
    furtherEducationTrainees: 400,
    completionRate: 88.0,
    employmentRate: 71.4,
    selfEmploymentRate: 14.0,
    retentionRate: 77.2,
    threeMonthRetentionRate: 85.1,
    twelveMonthRetentionRate: 70.4,
    skillGapIntensity: 38.6,
    topSkillGap: 'Food Processing Technology & Electrical Machinery',
    topSkillGaps: [
      {
        id: 'nsk-gap-1',
        name: 'Agri-Processing & Aseptic Packaging Operations',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1950,
        gapPercentage: 44,
        employerDemandSurge: '+58% demand across wine and agro-food processing clusters',
        recommendedAction: 'Institute live food safety standards (FSSAI/HACCP) in training modules.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'AGR-FPC-02',
        name: 'Fruit & Vegetable Processing Supervisor',
        enrolled: 3200,
        certified: 2850,
        placed: 2020,
        placementRate: 70.9,
        primaryDeficit: 'Quality grading instruments and cold storage management.'
      }
    ],
    recommendedIntervention: 'Form public-private skilling council with Nashik Industries & Manufacturers Association (NIMA) focusing on agri-tech and electrical machinery.',
    interventionStrategy: {
      priority: 'Medium-term (1-3 Months)',
      keyActions: [
        'Set up regional skill testing center in Ambad MIDC.',
        'Offer farm-to-factory dual apprenticeship tracks.'
      ],
      partnerAgencies: ['NIMA', 'HAL Nashik', 'MSSDS'],
      budgetEstimateLakhs: 290,
      expectedOutcomeLift: '+7.6% formal employment rate'
    },
    primaryIndustrialClusters: ['Satpur MIDC', 'Ambad MIDC', 'Sinnar Industrial Zone', 'Dindori Wine Park'],
    activeTrainingCentres: 88,
    averageStartingSalaryMonthly: 17900,
    femaleParticipationRate: 39.2,
    epfoVerificationRate: 81.6
  },
  {
    id: 'Aurangabad',
    name: 'Aurangabad',
    marathiName: 'छत्रपती संभाजीनगर (औरंगाबाद)',
    division: 'Chhatrapati Sambhajinagar',
    totalTrainees: 26500,
    certifiedTrainees: 22800,
    employedTrainees: 15390,
    selfEmployedTrainees: 3420,
    seekingEmploymentTrainees: 2736,
    droppedOutTrainees: 3700,
    untraceableTrainees: 800,
    furtherEducationTrainees: 454,
    completionRate: 86.0,
    employmentRate: 67.5,
    selfEmploymentRate: 15.0,
    retentionRate: 72.8,
    threeMonthRetentionRate: 82.0,
    twelveMonthRetentionRate: 65.4,
    skillGapIntensity: 44.2,
    topSkillGap: 'Good Manufacturing Practices (GMP) & Auto Components Machining',
    topSkillGaps: [
      {
        id: 'aur-gap-1',
        name: 'Pharmaceutical GMP & Cleanroom Protocols',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 2300,
        gapPercentage: 49,
        employerDemandSurge: '+62% demand in Shendra and Waluj pharma facilities',
        recommendedAction: 'Build cleanroom simulator at Aurangabad Government Polytechnic.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'PHAR-PRO-01',
        name: 'Pharma Production Assistant',
        enrolled: 2900,
        certified: 2510,
        placed: 1680,
        placementRate: 66.9,
        primaryDeficit: 'Documentation errors in batch manufacturing records (BMR).'
      }
    ],
    recommendedIntervention: 'Leverage AURIC (Aurangabad Industrial City - Smart City) anchor tenants to establish guaranteed hiring pipelines with 6-month retention incentives.',
    interventionStrategy: {
      priority: 'Immediate (0-30 Days)',
      keyActions: [
        'Fast-track AURIC skill center construction.',
        'Deploy mobile counseling vans to curb rural trainee post-placement dropouts.'
      ],
      partnerAgencies: ['AURIC', 'CMIA Aurangabad', 'Lupin Pharma', 'MSSDS'],
      budgetEstimateLakhs: 360,
      expectedOutcomeLift: '+9.1% retention in manufacturing'
    },
    primaryIndustrialClusters: ['Waluj Industrial Area', 'Shendra MIDC', 'AURIC Smart City', 'Chikhalthana'],
    activeTrainingCentres: 76,
    averageStartingSalaryMonthly: 17400,
    femaleParticipationRate: 34.8,
    epfoVerificationRate: 76.5
  },
  {
    id: 'Kolhapur',
    name: 'Kolhapur',
    marathiName: 'कोल्हापूर',
    division: 'Pune',
    totalTrainees: 21800,
    certifiedTrainees: 19400,
    employedTrainees: 14181,
    selfEmployedTrainees: 2716,
    seekingEmploymentTrainees: 1746,
    droppedOutTrainees: 2400,
    untraceableTrainees: 497,
    furtherEducationTrainees: 260,
    completionRate: 89.0,
    employmentRate: 73.1,
    selfEmploymentRate: 14.0,
    retentionRate: 80.4,
    threeMonthRetentionRate: 87.5,
    twelveMonthRetentionRate: 73.6,
    skillGapIntensity: 35.8,
    topSkillGap: 'Foundry Automation, CNC Programming & Agro-Textiles',
    topSkillGaps: [
      {
        id: 'kop-gap-1',
        name: 'High-Precision CNC Machine Tooling & Programming',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1700,
        gapPercentage: 38,
        employerDemandSurge: '+46% in Shiroli and Gokul Shirgaon foundry clusters',
        recommendedAction: 'Modernize ITI workshops with 5-axis CNC machining simulators.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'ENG-CNC-02',
        name: 'CNC Milling & Turning Operator',
        enrolled: 2800,
        certified: 2520,
        placed: 1890,
        placementRate: 75.0,
        primaryDeficit: 'Geometric dimensioning and tolerancing (GD&T) reading.'
      }
    ],
    recommendedIntervention: 'Form cooperative skilling clusters linking Kolhapur Foundry Association with state technical institutes for shared tooling labs.',
    interventionStrategy: {
      priority: 'Medium-term (1-3 Months)',
      keyActions: [
        'Establish shared high-tech foundry automation lab in Shiroli.',
        'Link trainees to MSME apprentice subsidy program.'
      ],
      partnerAgencies: ['Kolhapur Foundry Association', 'MSSDS', 'Kirloskar Oil Engines'],
      budgetEstimateLakhs: 240,
      expectedOutcomeLift: '+6.5% placement rate'
    },
    primaryIndustrialClusters: ['Shiroli MIDC', 'Gokul Shirgaon', 'Kagal-Hatkanangale Five Star MIDC'],
    activeTrainingCentres: 64,
    averageStartingSalaryMonthly: 18500,
    femaleParticipationRate: 36.1,
    epfoVerificationRate: 82.3
  },
  {
    id: 'Solapur',
    name: 'Solapur',
    marathiName: 'सोलापूर',
    division: 'Pune',
    totalTrainees: 19600,
    certifiedTrainees: 16460,
    employedTrainees: 10073,
    selfEmployedTrainees: 3292,
    seekingEmploymentTrainees: 2139,
    droppedOutTrainees: 3140,
    untraceableTrainees: 610,
    furtherEducationTrainees: 346,
    completionRate: 84.0,
    employmentRate: 61.2,
    selfEmploymentRate: 20.0,
    retentionRate: 68.4,
    threeMonthRetentionRate: 77.2,
    twelveMonthRetentionRate: 60.1,
    skillGapIntensity: 52.3,
    topSkillGap: 'Automated Textile Weaving, Jacquard Design & Solar Installation',
    topSkillGaps: [
      {
        id: 'sol-gap-1',
        name: 'Computerized Jacquard CAD/CAM Textile Design',
        category: 'Digital & Automation',
        severity: 'Critical',
        affectedTrainees: 2100,
        gapPercentage: 58,
        employerDemandSurge: '+60% demand for export-grade Solapur chaddar and terry towel clusters',
        recommendedAction: 'Introduce specialized digital Jacquard CAD workstations at Solapur Textile Institute.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'TEX-JAC-01',
        name: 'Digital Jacquard Weaving Operator',
        enrolled: 2600,
        certified: 2180,
        placed: 1350,
        placementRate: 61.9,
        primaryDeficit: 'Switching from manual handloom to electronic sensor-driven rapier looms.'
      }
    ],
    recommendedIntervention: 'Upgrade traditional handloom artisans to automated powerloom operators with export compliance certification and credit linkages.',
    interventionStrategy: {
      priority: 'Immediate (0-30 Days)',
      keyActions: [
        'Roll out Textile Cluster Technology Modernization skilling camps.',
        'Tie up with National Institute of Fashion Technology (NIFT) for design mentoring.'
      ],
      partnerAgencies: ['Solapur Textile Association', 'MSSDS', 'Textiles Committee'],
      budgetEstimateLakhs: 210,
      expectedOutcomeLift: '+12.4% in export-linked wage employment'
    },
    primaryIndustrialClusters: ['Chincholi MIDC', 'Akkalkot Road Industrial Area', 'Solapur Garment Park'],
    activeTrainingCentres: 58,
    averageStartingSalaryMonthly: 15200,
    femaleParticipationRate: 44.5,
    epfoVerificationRate: 69.8
  },
  {
    id: 'Ahmednagar',
    name: 'Ahmednagar',
    marathiName: 'अहिल्यानगर (अहमदनगर)',
    division: 'Nashik',
    totalTrainees: 22400,
    certifiedTrainees: 19260,
    employedTrainees: 12519,
    selfEmployedTrainees: 3466,
    seekingEmploymentTrainees: 2311,
    droppedOutTrainees: 3140,
    untraceableTrainees: 615,
    furtherEducationTrainees: 349,
    completionRate: 86.0,
    employmentRate: 65.0,
    selfEmploymentRate: 18.0,
    retentionRate: 70.1,
    threeMonthRetentionRate: 79.5,
    twelveMonthRetentionRate: 63.2,
    skillGapIntensity: 48.0,
    topSkillGap: 'Sugar Byproduct Biofuel Technology & Agro-Dairy Processing',
    topSkillGaps: [
      {
        id: 'ahm-gap-1',
        name: 'Ethanol Bio-refinery & Distillation Plant Operations',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1650,
        gapPercentage: 47,
        employerDemandSurge: '+68% demand due to 20% national ethanol blending mandate',
        recommendedAction: 'Launch certified Biofuel Operations Course with Vasantdada Sugar Institute.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'AGR-BIO-01',
        name: 'Bio-refinery Process Technician',
        enrolled: 2100,
        certified: 1820,
        placed: 1190,
        placementRate: 65.4,
        primaryDeficit: 'Continuous fermentation monitoring and boiler safety controls.'
      }
    ],
    recommendedIntervention: 'Create dedicated Biofuel and Agro-Dairy skill centers in cooperative sugar factory belts with assured off-take placements.',
    interventionStrategy: {
      priority: 'Medium-term (1-3 Months)',
      keyActions: [
        'Partner with Ahmednagar District Cooperative Milk & Sugar Federation.',
        'Deploy mobile milk testing & dairy cold chain technician courses.'
      ],
      partnerAgencies: ['Vasantdada Sugar Institute', 'MSSDS', 'Amul / Mahanand'],
      budgetEstimateLakhs: 230,
      expectedOutcomeLift: '+8.3% in rural youth placement'
    },
    primaryIndustrialClusters: ['Ahmednagar MIDC', 'Shrirampur Agro Zone', 'Supaa Parner MIDC'],
    activeTrainingCentres: 62,
    averageStartingSalaryMonthly: 16200,
    femaleParticipationRate: 37.8,
    epfoVerificationRate: 72.1
  },
  {
    id: 'Gadchiroli',
    name: 'Gadchiroli',
    marathiName: 'गडचिरोली',
    division: 'Nagpur',
    totalTrainees: 11200,
    certifiedTrainees: 8510,
    employedTrainees: 3582,
    selfEmployedTrainees: 2723,
    seekingEmploymentTrainees: 1531,
    droppedOutTrainees: 2690,
    untraceableTrainees: 512,
    furtherEducationTrainees: 162,
    completionRate: 76.0,
    employmentRate: 42.1,
    selfEmploymentRate: 32.0,
    retentionRate: 53.4,
    threeMonthRetentionRate: 63.5,
    twelveMonthRetentionRate: 45.0,
    skillGapIntensity: 78.5,
    topSkillGap: 'Forest Products Value Addition, Heavy Mining Equipment & Solar Maintenance',
    topSkillGaps: [
      {
        id: 'gad-gap-1',
        name: 'Heavy Earthmoving Mining Equipment Operator (Surjagarh Iron Ore)',
        category: 'Technical',
        severity: 'Critical',
        affectedTrainees: 1450,
        gapPercentage: 74,
        employerDemandSurge: '+120% demand in Lloyd Metals Surjagarh steel & mining project',
        recommendedAction: 'Deploy high-fidelity heavy excavator / dumper simulator at Chamorshi ITI.'
      },
      {
        id: 'gad-gap-2',
        name: 'Bamboo Composite & Timber Engineering',
        category: 'Technical',
        severity: 'Critical',
        affectedTrainees: 1200,
        gapPercentage: 66,
        employerDemandSurge: 'High export & domestic construction demand for eco-furniture',
        recommendedAction: 'Upgrade Maharashtra Bamboo Development Board training cluster in Wadsa.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'MIN-HE-01',
        name: 'Heavy Earthmoving Machinery (HEMM) Operator',
        enrolled: 1800,
        certified: 1350,
        placed: 580,
        placementRate: 43.0,
        primaryDeficit: 'Absence of practical driving hours on 40-tonne hydraulic excavators.'
      },
      {
        code: 'BAM-ECO-02',
        name: 'Industrial Bamboo Crafts & Furniture Maker',
        enrolled: 1500,
        certified: 1140,
        placed: 490,
        placementRate: 43.0,
        primaryDeficit: 'Lack of chemical treatment seasoning and automated lathe training.'
      }
    ],
    recommendedIntervention: 'Institute affirmative tribal youth skilling taskforce with Lloyds Metals at Surjagarh with 100% residential stipend and guaranteed EPFO employment.',
    interventionStrategy: {
      priority: 'Immediate (0-30 Days)',
      keyActions: [
        'Set up fully residential mining & metallurgy skill academy at Aheri/Chamorshi.',
        'Provide monthly direct benefit transfer (DBT) attendance stipend of Rs 3,500.',
        'Link local women self-help groups (SHGs) to minor forest produce processing clusters.'
      ],
      partnerAgencies: ['Lloyds Metals & Energy', 'Tribal Development Dept', 'MSSDS Gadchiroli'],
      budgetEstimateLakhs: 410,
      expectedOutcomeLift: '+22.5% in certified employment within 6 months'
    },
    primaryIndustrialClusters: ['Surjagarh Mining Corridor', 'Wadsa Forest Complex', 'Gadchiroli MIDC'],
    activeTrainingCentres: 34,
    averageStartingSalaryMonthly: 14600,
    femaleParticipationRate: 42.0,
    epfoVerificationRate: 58.2
  },
  {
    id: 'Nandurbar',
    name: 'Nandurbar',
    marathiName: 'नंदुरबार',
    division: 'Nashik',
    totalTrainees: 12800,
    certifiedTrainees: 9980,
    employedTrainees: 4451,
    selfEmployedTrainees: 2994,
    seekingEmploymentTrainees: 1896,
    droppedOutTrainees: 2820,
    untraceableTrainees: 480,
    furtherEducationTrainees: 159,
    completionRate: 78.0,
    employmentRate: 44.6,
    selfEmploymentRate: 30.0,
    retentionRate: 56.2,
    threeMonthRetentionRate: 67.0,
    twelveMonthRetentionRate: 48.3,
    skillGapIntensity: 74.0,
    topSkillGap: 'Solar Microgrid Technicians, Tribal Agri-Tech & Mobile Mechanics',
    topSkillGaps: [
      {
        id: 'ndb-gap-1',
        name: 'Off-Grid Solar Micro-Inverter & Pump Maintenance',
        category: 'Technical',
        severity: 'Critical',
        affectedTrainees: 1300,
        gapPercentage: 68,
        employerDemandSurge: '+85% demand for PM-KUSUM solar agricultural pump servicing in Satpuda hills',
        recommendedAction: 'Provide practical rooftop & agricultural solar field kits to rural ITIs.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'SOL-RUR-01',
        name: 'Solar Pump & Micro-Grid Technician',
        enrolled: 1900,
        certified: 1480,
        placed: 670,
        placementRate: 45.3,
        primaryDeficit: 'Diagnostic tools for submersible pump DC controllers.'
      }
    ],
    recommendedIntervention: 'Launch "Satpuda Kaushalya Rath" mobile training units with residential facilities to arrest seasonal sugarcane harvesting migration.',
    interventionStrategy: {
      priority: 'Immediate (0-30 Days)',
      keyActions: [
        'Deploy 6 mobile skill vans for remote tehsils like Dhadgaon and Akkalkuwa.',
        'Incentivize local solar and dairy cooperatives to hire local certified youth.'
      ],
      partnerAgencies: ['MEDA (Maha Energy Dev Agency)', 'Tribal Research Institute', 'MSSDS'],
      budgetEstimateLakhs: 260,
      expectedOutcomeLift: '+16.8% in local youth retention'
    },
    primaryIndustrialClusters: ['Nandurbar MIDC', 'Navapur Agro Belt', 'Shahada Sugar Complex'],
    activeTrainingCentres: 36,
    averageStartingSalaryMonthly: 13800,
    femaleParticipationRate: 43.1,
    epfoVerificationRate: 54.0
  },
  {
    id: 'Satara',
    name: 'Satara',
    marathiName: 'सातारा',
    division: 'Pune',
    totalTrainees: 18200,
    certifiedTrainees: 15830,
    employedTrainees: 11160,
    selfEmployedTrainees: 2374,
    seekingEmploymentTrainees: 1583,
    droppedOutTrainees: 2370,
    untraceableTrainees: 475,
    furtherEducationTrainees: 238,
    completionRate: 87.0,
    employmentRate: 70.5,
    selfEmploymentRate: 15.0,
    retentionRate: 76.5,
    threeMonthRetentionRate: 84.8,
    twelveMonthRetentionRate: 69.2,
    skillGapIntensity: 41.2,
    topSkillGap: 'Automotive Precision Forging & Eco-Tourism Hospitality',
    topSkillGaps: [
      {
        id: 'sat-gap-1',
        name: 'Precision Forging & Heat Treatment Operations',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1400,
        gapPercentage: 42,
        employerDemandSurge: '+52% demand in Shirwal and Khandala auto-component clusters',
        recommendedAction: 'Establish metallurgy and heat treatment testing center in Shirwal.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'FORG-MET-01',
        name: 'Forging & Heat Treatment Technician',
        enrolled: 2200,
        certified: 1910,
        placed: 1370,
        placementRate: 71.7,
        primaryDeficit: 'Metallurgical microscope inspection and hardness testing skills.'
      }
    ],
    recommendedIntervention: 'Leverage the Shirwal-Khandala industrial belt with structured dual-training models backed by Bharat Forge and Cooper Corporation.',
    interventionStrategy: {
      priority: 'Medium-term (1-3 Months)',
      keyActions: [
        'Sign MoU with Cooper Corp and Godrej Shirwal for apprentice intake.',
        'Establish Mahabaleshwar-Panchgani eco-hospitality training hub.'
      ],
      partnerAgencies: ['Shirwal Industries Association', 'Bharat Forge', 'MSSDS'],
      budgetEstimateLakhs: 210,
      expectedOutcomeLift: '+7.8% retention'
    },
    primaryIndustrialClusters: ['Shirwal MIDC', 'Khandala MIDC', 'Old Satara MIDC', 'Karad Agro Zone'],
    activeTrainingCentres: 54,
    averageStartingSalaryMonthly: 17800,
    femaleParticipationRate: 35.6,
    epfoVerificationRate: 78.9
  },
  {
    id: 'Sangli',
    name: 'Sangli',
    marathiName: 'सांगली',
    division: 'Pune',
    totalTrainees: 17400,
    certifiedTrainees: 15130,
    employedTrainees: 10439,
    selfEmployedTrainees: 2572,
    seekingEmploymentTrainees: 1513,
    droppedOutTrainees: 2270,
    untraceableTrainees: 454,
    furtherEducationTrainees: 152,
    completionRate: 87.0,
    employmentRate: 69.0,
    selfEmploymentRate: 17.0,
    retentionRate: 75.8,
    threeMonthRetentionRate: 83.5,
    twelveMonthRetentionRate: 68.0,
    skillGapIntensity: 43.5,
    topSkillGap: 'Turmeric & Grape Export Quality Processing & Heavy Fabrication',
    topSkillGaps: [
      {
        id: 'sgl-gap-1',
        name: 'Export Agri-Commodity Quality Testing & Phytosanitary Compliance',
        category: 'Domain Specific',
        severity: 'High',
        affectedTrainees: 1350,
        gapPercentage: 46,
        employerDemandSurge: '+54% demand in Sangli spice trading and raisin export hubs',
        recommendedAction: 'Equip laboratory at Sangli APMC for pesticide residue and curcumin testing.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'SPICE-QC-01',
        name: 'Spices & Agri-Commodity Quality Assayer',
        enrolled: 1800,
        certified: 1570,
        placed: 1090,
        placementRate: 69.4,
        primaryDeficit: 'Gas chromatography testing standards for European export consignments.'
      }
    ],
    recommendedIntervention: 'Upgrade Kupwad and Miraj industrial training facilities for heavy stainless steel fabrication and food quality labs.',
    interventionStrategy: {
      priority: 'Medium-term (1-3 Months)',
      keyActions: [
        'Form consortium with Sangli Turmeric Merchant Association.',
        'Provide solar dehydration equipment training for raisin producers.'
      ],
      partnerAgencies: ['Sangli Chamber of Commerce', 'APEDA', 'MSSDS'],
      budgetEstimateLakhs: 190,
      expectedOutcomeLift: '+8.0% formal agri-business employment'
    },
    primaryIndustrialClusters: ['Kupwad MIDC', 'Miraj MIDC', 'Tasgaon Grape Belt', 'Islampur'],
    activeTrainingCentres: 50,
    averageStartingSalaryMonthly: 16900,
    femaleParticipationRate: 38.2,
    epfoVerificationRate: 76.2
  },
  {
    id: 'Raigad',
    name: 'Raigad',
    marathiName: 'रायगड',
    division: 'Konkan',
    totalTrainees: 21500,
    certifiedTrainees: 18920,
    employedTrainees: 13206,
    selfEmployedTrainees: 2459,
    seekingEmploymentTrainees: 2270,
    droppedOutTrainees: 2580,
    untraceableTrainees: 605,
    furtherEducationTrainees: 380,
    completionRate: 88.0,
    employmentRate: 69.8,
    selfEmploymentRate: 13.0,
    retentionRate: 77.0,
    threeMonthRetentionRate: 85.0,
    twelveMonthRetentionRate: 70.5,
    skillGapIntensity: 39.8,
    topSkillGap: 'Port Logistics, Marine Engineering & Petrochemical Plant Safety',
    topSkillGaps: [
      {
        id: 'rgd-gap-1',
        name: 'Automated Container Terminal Equipment & RTG Crane Operations',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1600,
        gapPercentage: 44,
        employerDemandSurge: '+65% surge at JNPA (Nhava Sheva) and Dighi ports',
        recommendedAction: 'Install RTG crane and marine container handling simulator in Uran.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'MAR-PRT-01',
        name: 'Port & Container Terminal Operator',
        enrolled: 2400,
        certified: 2110,
        placed: 1520,
        placementRate: 72.0,
        primaryDeficit: 'Container terminal management system (Navis N4) operations.'
      }
    ],
    recommendedIntervention: 'Deepen institutional tie-up with Jawaharlal Nehru Port Authority (JNPA) for direct inductees into logistics and stevedoring companies.',
    interventionStrategy: {
      priority: 'Immediate (0-30 Days)',
      keyActions: [
        'Sign apprentice partnership with JNPA and private terminal operators (DP World/APM).',
        'Mandate process safety management (PSM) for Roha and Patalganga chemical belts.'
      ],
      partnerAgencies: ['JNPA Authority', 'Roha Industries Association', 'MSSDS'],
      budgetEstimateLakhs: 320,
      expectedOutcomeLift: '+10.5% in logistics placement'
    },
    primaryIndustrialClusters: ['JNPA Uran Port Zone', 'Patalganga MIDC', 'Roha Chemical Hub', 'Taloja MIDC'],
    activeTrainingCentres: 66,
    averageStartingSalaryMonthly: 20200,
    femaleParticipationRate: 33.4,
    epfoVerificationRate: 83.5
  },
  {
    id: 'Palghar',
    name: 'Palghar',
    marathiName: 'पालघर',
    division: 'Konkan',
    totalTrainees: 19800,
    certifiedTrainees: 17020,
    employedTrainees: 11403,
    selfEmployedTrainees: 2553,
    seekingEmploymentTrainees: 2042,
    droppedOutTrainees: 2780,
    untraceableTrainees: 680,
    furtherEducationTrainees: 342,
    completionRate: 86.0,
    employmentRate: 67.0,
    selfEmploymentRate: 15.0,
    retentionRate: 71.5,
    threeMonthRetentionRate: 80.2,
    twelveMonthRetentionRate: 64.0,
    skillGapIntensity: 47.5,
    topSkillGap: 'Plastic Injection Moulding, Pharmaceutical Packaging & Tribal Skilling',
    topSkillGaps: [
      {
        id: 'plg-gap-1',
        name: 'Precision Plastic Mould Tooling & Extrusion',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1800,
        gapPercentage: 48,
        employerDemandSurge: '+55% demand in Tarapur MIDC (Asia’s largest industrial estate)',
        recommendedAction: 'Partner with CIPET to upgrade Tarapur ITI plastic engineering lab.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'PLAS-EXT-01',
        name: 'Plastic Processing & Moulding Operator',
        enrolled: 2500,
        certified: 2150,
        placed: 1460,
        placementRate: 67.9,
        primaryDeficit: 'Die setting and hydraulic pressure calibration.'
      }
    ],
    recommendedIntervention: 'Launch Tarapur Industrial Skilling Mission to bridge the gap between tribal youth from Jawhar/Mokhada and Tarapur manufacturing units.',
    interventionStrategy: {
      priority: 'Immediate (0-30 Days)',
      keyActions: [
        'Provide dedicated subsidized transit buses from tribal talukas to Tarapur factories.',
        'Offer bilingual (Warli/Marathi) technical safety instruction.'
      ],
      partnerAgencies: ['Tarapur Industrial Manufacturers Association (TIMA)', 'CIPET', 'MSSDS'],
      budgetEstimateLakhs: 280,
      expectedOutcomeLift: '+14.2% in tribal youth wage employment'
    },
    primaryIndustrialClusters: ['Tarapur MIDC (Boisar)', 'Vasai-Virar Small Scale Hub', 'Dahanu'],
    activeTrainingCentres: 56,
    averageStartingSalaryMonthly: 17200,
    femaleParticipationRate: 40.5,
    epfoVerificationRate: 75.0
  },
  {
    id: 'Ratnagiri',
    name: 'Ratnagiri',
    marathiName: 'रत्नागिरी',
    division: 'Konkan',
    totalTrainees: 14200,
    certifiedTrainees: 12210,
    employedTrainees: 7631,
    selfEmployedTrainees: 2442,
    seekingEmploymentTrainees: 1465,
    droppedOutTrainees: 1990,
    untraceableTrainees: 427,
    furtherEducationTrainees: 245,
    completionRate: 86.0,
    employmentRate: 62.5,
    selfEmploymentRate: 20.0,
    retentionRate: 71.0,
    threeMonthRetentionRate: 79.5,
    twelveMonthRetentionRate: 63.8,
    skillGapIntensity: 49.0,
    topSkillGap: 'Cold-Chain Marine Processing, Alphonso Mango Value-Chain & Coastal Hospitality',
    topSkillGaps: [
      {
        id: 'rtg-gap-1',
        name: 'Flash Freezing & Export Marine Food Hygiene (HACCP)',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1250,
        gapPercentage: 50,
        employerDemandSurge: '+48% in Mirjole and coastal seafood export units',
        recommendedAction: 'Institute Marine Products Export Development Authority (MPEDA) certified training.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'MAR-FPD-01',
        name: 'Seafood Processing & Cold Store Technician',
        enrolled: 1600,
        certified: 1370,
        placed: 870,
        placementRate: 63.5,
        primaryDeficit: 'Automated blast freezer control and EU export sanitary standards.'
      }
    ],
    recommendedIntervention: 'Build coastal agro-marine processing and eco-resort hospitality centers of excellence with guaranteed local placements.',
    interventionStrategy: {
      priority: 'Medium-term (1-3 Months)',
      keyActions: [
        'Modernize Mirjole seafood processing training facility.',
        'Link trainees to fisheries cooperative cold-chain subsidies.'
      ],
      partnerAgencies: ['MPEDA', 'Konkan Krishi Vidyapeeth', 'MSSDS'],
      budgetEstimateLakhs: 180,
      expectedOutcomeLift: '+9.2% in local seafood processing retention'
    },
    primaryIndustrialClusters: ['Mirjole MIDC', 'Lote Parshuram Chemical Zone', 'Chiplun'],
    activeTrainingCentres: 44,
    averageStartingSalaryMonthly: 16400,
    femaleParticipationRate: 43.8,
    epfoVerificationRate: 70.4
  },
  {
    id: 'Sindhudurg',
    name: 'Sindhudurg',
    marathiName: 'सिंधुदुर्ग',
    division: 'Konkan',
    totalTrainees: 10500,
    certifiedTrainees: 9135,
    employedTrainees: 5572,
    selfEmployedTrainees: 2010,
    seekingEmploymentTrainees: 1096,
    droppedOutTrainees: 1365,
    untraceableTrainees: 320,
    furtherEducationTrainees: 137,
    completionRate: 87.0,
    employmentRate: 61.0,
    selfEmploymentRate: 22.0,
    retentionRate: 72.4,
    threeMonthRetentionRate: 81.0,
    twelveMonthRetentionRate: 65.2,
    skillGapIntensity: 46.8,
    topSkillGap: 'Eco-Tourism Adventure Operations, Cashew Processing & Marine Scuba Diving',
    topSkillGaps: [
      {
        id: 'snd-gap-1',
        name: 'Certified Eco-Tourism & Marine Adventure Operations',
        category: 'Domain Specific',
        severity: 'Moderate',
        affectedTrainees: 850,
        gapPercentage: 42,
        employerDemandSurge: '+65% with launch of Chipi Airport and coastal luxury resorts',
        recommendedAction: 'Tie up with Indian Institute of Scuba Diving & Aquatic Sports (IISDA) Tarkarli.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'HOSP-ECO-01',
        name: 'Coastal Eco-Resort & Adventure Guide',
        enrolled: 1200,
        certified: 1040,
        placed: 650,
        placementRate: 62.5,
        primaryDeficit: 'Foreign language communication and certified maritime first-aid.'
      }
    ],
    recommendedIntervention: 'Promote tourism micro-entrepreneurship linked to Chipi Airport influx and cashew processing automation.',
    interventionStrategy: {
      priority: 'Medium-term (1-3 Months)',
      keyActions: [
        'Deploy tourism guide certification with MTDC accreditation.',
        'Facilitate Mudra loans for certified home-stay operators.'
      ],
      partnerAgencies: ['MTDC', 'District Tourism Council', 'MSSDS'],
      budgetEstimateLakhs: 140,
      expectedOutcomeLift: '+11.0% in self-employment revenue'
    },
    primaryIndustrialClusters: ['Kudal MIDC', 'Malvan Tourism Belt', 'Sawantwadi Wooden Craft Hub'],
    activeTrainingCentres: 32,
    averageStartingSalaryMonthly: 15800,
    femaleParticipationRate: 46.0,
    epfoVerificationRate: 67.5
  },
  {
    id: 'Jalgaon',
    name: 'Jalgaon',
    marathiName: 'जळगाव',
    division: 'Nashik',
    totalTrainees: 23500,
    certifiedTrainees: 20210,
    employedTrainees: 13338,
    selfEmployedTrainees: 3436,
    seekingEmploymentTrainees: 2425,
    droppedOutTrainees: 3290,
    untraceableTrainees: 687,
    furtherEducationTrainees: 324,
    completionRate: 86.0,
    employmentRate: 66.0,
    selfEmploymentRate: 17.0,
    retentionRate: 73.0,
    threeMonthRetentionRate: 81.8,
    twelveMonthRetentionRate: 66.5,
    skillGapIntensity: 46.0,
    topSkillGap: 'Micro-Irrigation Tech, Polymer Pipe Extrusion & Banana Fibre Processing',
    topSkillGaps: [
      {
        id: 'jlg-gap-1',
        name: 'Drip & Micro-Irrigation Automated System Assembly',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1850,
        gapPercentage: 45,
        employerDemandSurge: '+58% demand at Jain Irrigation Systems and ancillary polymer units',
        recommendedAction: 'Co-develop training curriculum with Jain Irrigation Skill Center.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'IRR-DRP-01',
        name: 'Micro-Irrigation Installation Technician',
        enrolled: 2400,
        certified: 2060,
        placed: 1390,
        placementRate: 67.5,
        primaryDeficit: 'Pressure-compensating dripper troubleshooting and sensor integration.'
      }
    ],
    recommendedIntervention: 'Partner with Jain Irrigation to scale apprenticeship models across northern Maharashtra.',
    interventionStrategy: {
      priority: 'Medium-term (1-3 Months)',
      keyActions: [
        'Establish Jalgaon Micro-Irrigation Skill Hub.',
        'Train 1,200 women SHG members in banana pseudostem fibre extraction.'
      ],
      partnerAgencies: ['Jain Irrigation Systems', 'MSSDS Jalgaon', 'KBC North Maharashtra Univ'],
      budgetEstimateLakhs: 230,
      expectedOutcomeLift: '+8.5% in technical placements'
    },
    primaryIndustrialClusters: ['Jalgaon MIDC', 'Bhusawal Railway Mechanical Workshop', 'Chalisgaon Textile'],
    activeTrainingCentres: 68,
    averageStartingSalaryMonthly: 16800,
    femaleParticipationRate: 38.5,
    epfoVerificationRate: 74.2
  },
  {
    id: 'Dhule',
    name: 'Dhule',
    marathiName: 'धुळे',
    division: 'Nashik',
    totalTrainees: 16500,
    certifiedTrainees: 13860,
    employedTrainees: 8177,
    selfEmployedTrainees: 2911,
    seekingEmploymentTrainees: 1940,
    droppedOutTrainees: 2640,
    untraceableTrainees: 554,
    furtherEducationTrainees: 278,
    completionRate: 84.0,
    employmentRate: 59.0,
    selfEmploymentRate: 21.0,
    retentionRate: 67.0,
    threeMonthRetentionRate: 76.5,
    twelveMonthRetentionRate: 59.5,
    skillGapIntensity: 56.4,
    topSkillGap: 'Textile Powerloom Automation & Highway Logistics Servicing',
    topSkillGaps: [
      {
        id: 'dhl-gap-1',
        name: 'Heavy Commercial Vehicle Electronics & BS-VI Diagnostics',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1400,
        gapPercentage: 54,
        employerDemandSurge: '+60% demand at Mumbai-Agra & Surat-Nagpur highway logistics crossroads',
        recommendedAction: 'Set up commercial fleet diagnostics lab on NH-52 corridor.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'AUTO-HCV-01',
        name: 'Heavy Commercial Vehicle Service Technician',
        enrolled: 1800,
        certified: 1510,
        placed: 920,
        placementRate: 60.9,
        primaryDeficit: 'Common rail diesel injection (CRDI) and DEF sensor error codes.'
      }
    ],
    recommendedIntervention: 'Leverage Dhule’s geographic position as a national transit junction to establish truck fleet servicing academies with major OEM tie-ups.',
    interventionStrategy: {
      priority: 'Medium-term (1-3 Months)',
      keyActions: [
        'Tie up with Ashok Leyland and Tata Motors for highway service station apprentice tracks.',
        'Upgrade Shirpur powerloom cluster with electronic jacquards.'
      ],
      partnerAgencies: ['Dhule Transporters Association', 'MSSDS', 'Tata Motors'],
      budgetEstimateLakhs: 200,
      expectedOutcomeLift: '+9.4% in transport sector placement'
    },
    primaryIndustrialClusters: ['Awadhan MIDC', 'Shirpur Textile Complex', 'Nardana Industrial Hub'],
    activeTrainingCentres: 48,
    averageStartingSalaryMonthly: 15600,
    femaleParticipationRate: 36.4,
    epfoVerificationRate: 68.0
  },
  {
    id: 'Amravati',
    name: 'Amravati',
    marathiName: 'अमरावती',
    division: 'Amravati',
    totalTrainees: 24200,
    certifiedTrainees: 20570,
    employedTrainees: 13370,
    selfEmployedTrainees: 3497,
    seekingEmploymentTrainees: 2468,
    droppedOutTrainees: 3630,
    untraceableTrainees: 823,
    furtherEducationTrainees: 412,
    completionRate: 85.0,
    employmentRate: 65.0,
    selfEmploymentRate: 17.0,
    retentionRate: 70.8,
    threeMonthRetentionRate: 79.8,
    twelveMonthRetentionRate: 64.2,
    skillGapIntensity: 48.6,
    topSkillGap: 'Technical Textiles, Cotton Ginning Automation & Mandarin Orange Value Chain',
    topSkillGaps: [
      {
        id: 'amr-gap-1',
        name: 'Technical Textile Spunbond & Meltblown Operations',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1900,
        gapPercentage: 48,
        employerDemandSurge: '+66% surge at Nandgaon Peth Textile Park (Raymond, Shyam Ind)',
        recommendedAction: 'Install automated yarn spinning simulator at Amravati Government Polytechnic.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'TEX-SPN-01',
        name: 'Yarn Spinning & Winding Machine Operator',
        enrolled: 2500,
        certified: 2120,
        placed: 1410,
        placementRate: 66.5,
        primaryDeficit: 'Splicing defect troubleshooting and spindle speed synchronization.'
      }
    ],
    recommendedIntervention: 'Form specialized Vidarbha Textile Skilling Consortium anchored at Nandgaon Peth 5-Star MIDC.',
    interventionStrategy: {
      priority: 'Immediate (0-30 Days)',
      keyActions: [
        'Launch dedicated recruitment cell linking rural Melghat tribal youth to Nandgaon Peth factories.',
        'Provide hostel boarding assistance to arrest early-phase dropouts.'
      ],
      partnerAgencies: ['Amravati Textile Association', 'Raymond Ltd', 'MSSDS'],
      budgetEstimateLakhs: 290,
      expectedOutcomeLift: '+10.4% in female youth retention'
    },
    primaryIndustrialClusters: ['Nandgaon Peth 5-Star MIDC', 'Badnera Railway Hub', 'Morshi Citrus Zone'],
    activeTrainingCentres: 70,
    averageStartingSalaryMonthly: 16500,
    femaleParticipationRate: 41.5,
    epfoVerificationRate: 73.5
  },
  {
    id: 'Akola',
    name: 'Akola',
    marathiName: 'अकोला',
    division: 'Amravati',
    totalTrainees: 17800,
    certifiedTrainees: 14952,
    employedTrainees: 9270,
    selfEmployedTrainees: 2691,
    seekingEmploymentTrainees: 1944,
    droppedOutTrainees: 2848,
    untraceableTrainees: 748,
    furtherEducationTrainees: 299,
    completionRate: 84.0,
    employmentRate: 62.0,
    selfEmploymentRate: 18.0,
    retentionRate: 68.5,
    threeMonthRetentionRate: 78.0,
    twelveMonthRetentionRate: 61.0,
    skillGapIntensity: 51.5,
    topSkillGap: 'Pulse (Dal) Milling Automation & Cottonseed Oil Refining',
    topSkillGaps: [
      {
        id: 'akl-gap-1',
        name: 'Automated Grain Milling & Colour Sorter Operation',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1450,
        gapPercentage: 52,
        employerDemandSurge: '+49% demand in Akola Dal Mill cluster (one of India’s largest)',
        recommendedAction: 'Upgrade PDKV Agricultural University vocational dal milling lab.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'AGR-DAL-01',
        name: 'Dal Mill Plant Operator',
        enrolled: 1900,
        certified: 1590,
        placed: 990,
        placementRate: 62.3,
        primaryDeficit: 'Pneumatic de-husking and optical laser sorter calibrating.'
      }
    ],
    recommendedIntervention: 'Automate pulse milling training and introduce certified seed technology programs with Panjabrao Deshmukh Krishi Vidyapeeth (PDKV).',
    interventionStrategy: {
      priority: 'Medium-term (1-3 Months)',
      keyActions: [
        'Form Dal Millers Association apprentice pact.',
        'Subsidize local youth transport from rural tehsils.'
      ],
      partnerAgencies: ['Akola Dal Millers Association', 'PDKV', 'MSSDS'],
      budgetEstimateLakhs: 180,
      expectedOutcomeLift: '+7.8% placement conversion'
    },
    primaryIndustrialClusters: ['Akola MIDC Phase I-IV', 'Murtizapur Oil Zone', 'Patur'],
    activeTrainingCentres: 52,
    averageStartingSalaryMonthly: 15900,
    femaleParticipationRate: 35.8,
    epfoVerificationRate: 70.0
  },
  {
    id: 'Yavatmal',
    name: 'Yavatmal',
    marathiName: 'यवतमाळ',
    division: 'Amravati',
    totalTrainees: 19200,
    certifiedTrainees: 15360,
    employedTrainees: 8448,
    selfEmployedTrainees: 3379,
    seekingEmploymentTrainees: 2304,
    droppedOutTrainees: 3840,
    untraceableTrainees: 922,
    furtherEducationTrainees: 307,
    completionRate: 80.0,
    employmentRate: 55.0,
    selfEmploymentRate: 22.0,
    retentionRate: 62.5,
    threeMonthRetentionRate: 72.0,
    twelveMonthRetentionRate: 54.0,
    skillGapIntensity: 63.5,
    topSkillGap: 'Cotton Ginning Technology, Agritech Drone Spraying & Solar Irrigation',
    topSkillGaps: [
      {
        id: 'yvt-gap-1',
        name: 'Agricultural Drone Pilot & Precision Spraying',
        category: 'Digital & Automation',
        severity: 'Critical',
        affectedTrainees: 1700,
        gapPercentage: 65,
        employerDemandSurge: '+95% demand to prevent manual chemical pesticide poisoning in cotton belt',
        recommendedAction: 'Set up DGCA-certified Remote Pilot Training Organization (RPTO) at Yavatmal.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'DRN-AGR-01',
        name: 'Kisan Drone Pilot & Maintenance Tech',
        enrolled: 1800,
        certified: 1440,
        placed: 810,
        placementRate: 56.2,
        primaryDeficit: 'DGCA flight log compliance and battery thermal safety protocols.'
      }
    ],
    recommendedIntervention: 'Launch high-priority farmer-family youth empowerment initiative focusing on drone piloting, organic cotton ginning, and certified pest management.',
    interventionStrategy: {
      priority: 'Immediate (0-30 Days)',
      keyActions: [
        'Distribute 100 subsidized drone spray kits to certified rural youth collectives.',
        'Set up mental wellness & placement counseling center at District Skill Office.'
      ],
      partnerAgencies: ['DGCA certified RPTO', 'District Agriculture Dept', 'MSSDS'],
      budgetEstimateLakhs: 270,
      expectedOutcomeLift: '+14.5% sustainable self-employment earnings'
    },
    primaryIndustrialClusters: ['Lohara MIDC', 'Wani Coal/Lime Mining Hub', 'Pusad Cotton Zone'],
    activeTrainingCentres: 50,
    averageStartingSalaryMonthly: 14800,
    femaleParticipationRate: 37.0,
    epfoVerificationRate: 63.4
  },
  {
    id: 'Buldhana',
    name: 'Buldhana',
    marathiName: 'बुलढाणा',
    division: 'Amravati',
    totalTrainees: 16800,
    certifiedTrainees: 13776,
    employedTrainees: 8128,
    selfEmployedTrainees: 2755,
    seekingEmploymentTrainees: 1928,
    droppedOutTrainees: 3024,
    untraceableTrainees: 689,
    furtherEducationTrainees: 276,
    completionRate: 82.0,
    employmentRate: 59.0,
    selfEmploymentRate: 20.0,
    retentionRate: 65.2,
    threeMonthRetentionRate: 75.0,
    twelveMonthRetentionRate: 57.5,
    skillGapIntensity: 57.0,
    topSkillGap: 'Bio-Fertilizer Manufacturing, Agro-Machinery Repair & Geo-Tourism',
    topSkillGaps: [
      {
        id: 'bul-gap-1',
        name: 'Precision Agro-Machinery & Harvester Mechanics',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1350,
        gapPercentage: 55,
        employerDemandSurge: '+52% demand during peak soybean and cotton harvesting seasons',
        recommendedAction: 'Tie up with Mahindra Tractors and John Deere dealerships.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'AGR-MCH-01',
        name: 'Tractor & Combine Harvester Mechanic',
        enrolled: 1900,
        certified: 1560,
        placed: 920,
        placementRate: 59.0,
        primaryDeficit: 'Hydrostatic transmission and hydraulic valve troubleshooting.'
      }
    ],
    recommendedIntervention: 'Establish Lonar Crater eco-tourism guide academy and combine harvester repair training centers in Malkapur and Khamgaon.',
    interventionStrategy: {
      priority: 'Medium-term (1-3 Months)',
      keyActions: [
        'Form Khamgaon oil & agro-machinery skilling network.',
        'Incentivize local workshop apprenticeships.'
      ],
      partnerAgencies: ['Khamgaon Industrial Association', 'MSSDS', 'Agri Dept'],
      budgetEstimateLakhs: 180,
      expectedOutcomeLift: '+8.2% local retention'
    },
    primaryIndustrialClusters: ['Khamgaon MIDC', 'Malkapur Industrial Zone', 'Shegaon Pilgrim Zone'],
    activeTrainingCentres: 46,
    averageStartingSalaryMonthly: 15100,
    femaleParticipationRate: 36.2,
    epfoVerificationRate: 67.2
  },
  {
    id: 'Washim',
    name: 'Washim',
    marathiName: 'वाशीम',
    division: 'Amravati',
    totalTrainees: 11800,
    certifiedTrainees: 9204,
    employedTrainees: 4970,
    selfEmployedTrainees: 2209,
    seekingEmploymentTrainees: 1472,
    droppedOutTrainees: 2596,
    untraceableTrainees: 460,
    furtherEducationTrainees: 184,
    completionRate: 78.0,
    employmentRate: 54.0,
    selfEmploymentRate: 24.0,
    retentionRate: 60.5,
    threeMonthRetentionRate: 71.0,
    twelveMonthRetentionRate: 52.0,
    skillGapIntensity: 66.8,
    topSkillGap: 'Soybean Processing, Solar Inverter Maintenance & Soil Health Diagnostics',
    topSkillGaps: [
      {
        id: 'wsh-gap-1',
        name: 'Soybean Solvent Extraction & Quality Assurance',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1100,
        gapPercentage: 62,
        employerDemandSurge: '+58% demand across soybean oil mills and processing plants',
        recommendedAction: 'Set up chemical testing lab at Washim Government ITI.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'SOY-EXT-01',
        name: 'Soybean Solvent Extraction Plant Attendant',
        enrolled: 1400,
        certified: 1090,
        placed: 590,
        placementRate: 54.1,
        primaryDeficit: 'Hexane solvent recovery and flash point safety handling.'
      }
    ],
    recommendedIntervention: 'Form cooperative skilling hubs with soybean processing plants and launch solar micro-grid training in aspirational district blocks.',
    interventionStrategy: {
      priority: 'Immediate (0-30 Days)',
      keyActions: [
        'Deploy mobile soil testing and solar equipment training labs.',
        'Provide Rs 2,500 monthly stipend to disadvantaged youth.'
      ],
      partnerAgencies: ['District Skill Committee Washim', 'MSSDS', 'NABARD'],
      budgetEstimateLakhs: 160,
      expectedOutcomeLift: '+11.2% in wage placement'
    },
    primaryIndustrialClusters: ['Washim MIDC', 'Risod Agro Belt', 'Malegaon'],
    activeTrainingCentres: 34,
    averageStartingSalaryMonthly: 14200,
    femaleParticipationRate: 38.0,
    epfoVerificationRate: 61.5
  },
  {
    id: 'Wardha',
    name: 'Wardha',
    marathiName: 'वर्धा',
    division: 'Nagpur',
    totalTrainees: 14800,
    certifiedTrainees: 12580,
    employedTrainees: 8177,
    selfEmployedTrainees: 2264,
    seekingEmploymentTrainees: 1510,
    droppedOutTrainees: 2220,
    untraceableTrainees: 503,
    furtherEducationTrainees: 251,
    completionRate: 85.0,
    employmentRate: 65.0,
    selfEmploymentRate: 18.0,
    retentionRate: 71.2,
    threeMonthRetentionRate: 80.5,
    twelveMonthRetentionRate: 64.0,
    skillGapIntensity: 47.5,
    topSkillGap: 'Natural Fiber Spinning, Steel Plant Maintenance & Agro-Solar Tech',
    topSkillGaps: [
      {
        id: 'wrd-gap-1',
        name: 'Steel Rolling Mill & Heavy Furnace Electrical Maintenance',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1200,
        gapPercentage: 46,
        employerDemandSurge: '+54% demand at Uttam Galva and Lloyd Steel complexes',
        recommendedAction: 'Install high-voltage electrical safety simulation lab.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'STL-ROL-01',
        name: 'Rolling Mill Electrical Maintenance Technician',
        enrolled: 1600,
        certified: 1360,
        placed: 890,
        placementRate: 65.4,
        primaryDeficit: 'Thyristor drive troubleshooting and automated loop controls.'
      }
    ],
    recommendedIntervention: 'Expand industrial apprenticeships with Wardha steel corridor and scale Sevagram-inspired organic cotton khadi value chain training.',
    interventionStrategy: {
      priority: 'Medium-term (1-3 Months)',
      keyActions: [
        'Partner with Wardha Steel Manufacturers Consortium.',
        'Revitalize Khadi & Village Industries Commission (KVIC) spinning training.'
      ],
      partnerAgencies: ['KVIC Sevagram', 'Wardha Steel', 'MSSDS'],
      budgetEstimateLakhs: 190,
      expectedOutcomeLift: '+8.4% retention rate'
    },
    primaryIndustrialClusters: ['Wardha Industrial Area', 'Deoli Steel Corridor', 'Hinganghat Textile Belt'],
    activeTrainingCentres: 42,
    averageStartingSalaryMonthly: 16700,
    femaleParticipationRate: 40.2,
    epfoVerificationRate: 74.0
  },
  {
    id: 'Chandrapur',
    name: 'Chandrapur',
    marathiName: 'चंद्रपूर',
    division: 'Nagpur',
    totalTrainees: 19800,
    certifiedTrainees: 16434,
    employedTrainees: 10682,
    selfEmployedTrainees: 2630,
    seekingEmploymentTrainees: 2136,
    droppedOutTrainees: 3366,
    untraceableTrainees: 657,
    furtherEducationTrainees: 329,
    completionRate: 83.0,
    employmentRate: 65.0,
    selfEmploymentRate: 16.0,
    retentionRate: 71.0,
    threeMonthRetentionRate: 80.0,
    twelveMonthRetentionRate: 63.5,
    skillGapIntensity: 52.0,
    topSkillGap: 'Thermal Plant Instrumentation, Heavy Mining Fleet & Green Energy Transition',
    topSkillGaps: [
      {
        id: 'chd-gap-1',
        name: 'Supercritical Thermal Plant Boiler Control & Flue Gas Desulfurization',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1600,
        gapPercentage: 50,
        employerDemandSurge: '+45% demand at Chandrapur Super Thermal Power Station (CSTPS)',
        recommendedAction: 'Construct simulator for pollution control and desulfurization plant handling.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'PWR-FGD-01',
        name: 'Thermal Power Flue Gas Desulfurization Attendant',
        enrolled: 2100,
        certified: 1740,
        placed: 1140,
        placementRate: 65.5,
        primaryDeficit: 'Lime slurry injection automation and SO2 sensor calibration.'
      }
    ],
    recommendedIntervention: 'Drive "Just Transition" skilling for coal economy workers into solar utility maintenance and cement plant automation.',
    interventionStrategy: {
      priority: 'Immediate (0-30 Days)',
      keyActions: [
        'Establish Green Transition Skilling Academy with MAHAGENCO and WCL.',
        'Train 1,500 coal workers in large-scale solar farm balance-of-system (BOS).'
      ],
      partnerAgencies: ['MAHAGENCO CSTPS', 'Western Coalfields Ltd (WCL)', 'MSSDS'],
      budgetEstimateLakhs: 310,
      expectedOutcomeLift: '+10.2% in sustainable wage employment'
    },
    primaryIndustrialClusters: ['CSTPS Thermal Zone', 'Ghugus Industrial Area', 'Tadoba Eco-Zone', 'Ballarpur Paper Mills'],
    activeTrainingCentres: 56,
    averageStartingSalaryMonthly: 17500,
    femaleParticipationRate: 31.8,
    epfoVerificationRate: 77.2
  },
  {
    id: 'Bhandara',
    name: 'Bhandara',
    marathiName: 'भंडारा',
    division: 'Nagpur',
    totalTrainees: 12400,
    certifiedTrainees: 10292,
    employedTrainees: 6175,
    selfEmployedTrainees: 2161,
    seekingEmploymentTrainees: 1441,
    droppedOutTrainees: 2108,
    untraceableTrainees: 412,
    furtherEducationTrainees: 206,
    completionRate: 83.0,
    employmentRate: 60.0,
    selfEmploymentRate: 21.0,
    retentionRate: 66.8,
    threeMonthRetentionRate: 76.0,
    twelveMonthRetentionRate: 59.2,
    skillGapIntensity: 54.0,
    topSkillGap: 'Brass Metal Fabrication, Rice Mill Optical Sorting & Ordnance Works',
    topSkillGaps: [
      {
        id: 'bhd-gap-1',
        name: 'Precision Brass Metallurgy & Spinning Lathe Operations',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1100,
        gapPercentage: 52,
        employerDemandSurge: '+44% demand in Bhandara “Brass City” utensil cluster',
        recommendedAction: 'Modernize traditional annealing and automated metal spinning lathes.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'MET-BRS-01',
        name: 'Brass Utensil & Component Fabricator',
        enrolled: 1500,
        certified: 1240,
        placed: 750,
        placementRate: 60.5,
        primaryDeficit: 'Mirror finishing polishing and lead-free alloy standards.'
      }
    ],
    recommendedIntervention: 'Upgrade Bhandara brass cluster with export-grade automated spinning machinery and leverage Ordnance Factory Bhandara for apprentice intakes.',
    interventionStrategy: {
      priority: 'Medium-term (1-3 Months)',
      keyActions: [
        'Form joint committee with Ordnance Factory Jawaharnagar.',
        'Modernize paddy parboiling and automated sortex mills.'
      ],
      partnerAgencies: ['Ordnance Factory Board', 'Bhandara Rice Millers', 'MSSDS'],
      budgetEstimateLakhs: 170,
      expectedOutcomeLift: '+7.9% placement lift'
    },
    primaryIndustrialClusters: ['Bhandara Industrial Area', 'Ganeshpur Brass Cluster', 'Tumsar Manganese Hub'],
    activeTrainingCentres: 38,
    averageStartingSalaryMonthly: 15400,
    femaleParticipationRate: 39.0,
    epfoVerificationRate: 69.5
  },
  {
    id: 'Gondia',
    name: 'Gondia',
    marathiName: 'गोंदिया',
    division: 'Nagpur',
    totalTrainees: 11500,
    certifiedTrainees: 9315,
    employedTrainees: 5123,
    selfEmployedTrainees: 2235,
    seekingEmploymentTrainees: 1397,
    droppedOutTrainees: 2185,
    untraceableTrainees: 373,
    furtherEducationTrainees: 186,
    completionRate: 81.0,
    employmentRate: 55.0,
    selfEmploymentRate: 24.0,
    retentionRate: 62.0,
    threeMonthRetentionRate: 72.5,
    twelveMonthRetentionRate: 54.0,
    skillGapIntensity: 62.0,
    topSkillGap: 'Rice Mill Parboiling Automation, Forest Tendu Leaf Products & Aviation Ground Crew',
    topSkillGaps: [
      {
        id: 'gnd-gap-1',
        name: 'Aviation Flight Simulator Ground Handling (Birsi Airport/NFTI)',
        category: 'Domain Specific',
        severity: 'Moderate',
        affectedTrainees: 900,
        gapPercentage: 58,
        employerDemandSurge: '+60% demand at National Flying Training Institute (NFTI) Birsi',
        recommendedAction: 'Institute airport ground crew and avionics basic maintenance certificate.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'RCE-SRT-01',
        name: 'Optical Rice Sorter & Parboiling Operator',
        enrolled: 1400,
        certified: 1130,
        placed: 620,
        placementRate: 54.9,
        primaryDeficit: 'Moisture sensor calibration and broken rice separator mechanics.'
      }
    ],
    recommendedIntervention: 'Leverage National Flying Training Institute (NFTI) at Birsi for aviation skilling and establish modern agro-food processing incubators.',
    interventionStrategy: {
      priority: 'Medium-term (1-3 Months)',
      keyActions: [
        'MoU with NFTI Birsi for local tribal aviation ground staff.',
        'Link rice millers to modern biomass boiler operator certifications.'
      ],
      partnerAgencies: ['NFTI Gondia', 'Gondia Rice Millers Association', 'MSSDS'],
      budgetEstimateLakhs: 160,
      expectedOutcomeLift: '+9.0% formal placements'
    },
    primaryIndustrialClusters: ['Gondia Rice City Cluster', 'Birsi Aviation Zone', 'Tirora Adani Power'],
    activeTrainingCentres: 34,
    averageStartingSalaryMonthly: 14900,
    femaleParticipationRate: 41.0,
    epfoVerificationRate: 64.0
  },
  {
    id: 'Jalna',
    name: 'Jalna',
    marathiName: 'जालना',
    division: 'Chhatrapati Sambhajinagar',
    totalTrainees: 18400,
    certifiedTrainees: 15456,
    employedTrainees: 10046,
    selfEmployedTrainees: 2782,
    seekingEmploymentTrainees: 1855,
    droppedOutTrainees: 2944,
    untraceableTrainees: 618,
    furtherEducationTrainees: 309,
    completionRate: 84.0,
    employmentRate: 65.0,
    selfEmploymentRate: 18.0,
    retentionRate: 70.0,
    threeMonthRetentionRate: 79.0,
    twelveMonthRetentionRate: 62.5,
    skillGapIntensity: 49.5,
    topSkillGap: 'Steel TMT Bar Rolling, Hybrid Seed Genetics & Cold Chain Logistics',
    topSkillGaps: [
      {
        id: 'jln-gap-1',
        name: 'Hybrid Seed Pollination & Genetic Purity Testing',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1400,
        gapPercentage: 48,
        employerDemandSurge: '+64% demand in Jalna (Seed Capital of India - Mahyco, Kalash Seeds)',
        recommendedAction: 'Establish biotechnology & molecular seed testing lab at Jalna ITI.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'AGR-SED-01',
        name: 'Seed Production & Hybridization Technician',
        enrolled: 1900,
        certified: 1590,
        placed: 1040,
        placementRate: 65.4,
        primaryDeficit: 'Greenhouse climate controllers and DNA marker testing basics.'
      }
    ],
    recommendedIntervention: 'Form specialized Seed Industry Skilling Council with Mahyco/Kalash and modernize steel TMT re-rolling apprenticeships.',
    interventionStrategy: {
      priority: 'Immediate (0-30 Days)',
      keyActions: [
        'Deploy Jalna Seed Cluster Apprenticeship Portal.',
        'Equip steel re-rolling workers with metallurgical safety certifications.'
      ],
      partnerAgencies: ['Jalna Seed Association', 'Steel Re-Rollers Association', 'MSSDS'],
      budgetEstimateLakhs: 230,
      expectedOutcomeLift: '+9.8% in seed industry wage employment'
    },
    primaryIndustrialClusters: ['Jalna Steel & Re-Rolling Zone', 'Seed Valley Agro Cluster', 'Jalna Dry Port'],
    activeTrainingCentres: 52,
    averageStartingSalaryMonthly: 16900,
    femaleParticipationRate: 36.8,
    epfoVerificationRate: 73.1
  },
  {
    id: 'Parbhani',
    name: 'Parbhani',
    marathiName: 'परभणी',
    division: 'Chhatrapati Sambhajinagar',
    totalTrainees: 14600,
    certifiedTrainees: 11972,
    employedTrainees: 6704,
    selfEmployedTrainees: 2634,
    seekingEmploymentTrainees: 1915,
    droppedOutTrainees: 2628,
    untraceableTrainees: 599,
    furtherEducationTrainees: 239,
    completionRate: 82.0,
    employmentRate: 56.0,
    selfEmploymentRate: 22.0,
    retentionRate: 63.5,
    threeMonthRetentionRate: 73.0,
    twelveMonthRetentionRate: 55.0,
    skillGapIntensity: 61.2,
    topSkillGap: 'Cotton Ginning Sensor Tech, Soybean Seed Grading & Micro-Dairy Operations',
    topSkillGaps: [
      {
        id: 'prb-gap-1',
        name: 'Automated Cotton Ginning & Fiber Length Profiling',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1300,
        gapPercentage: 58,
        employerDemandSurge: '+52% demand across Parbhani cotton ginning and pressing units',
        recommendedAction: 'Upgrade testing lab at Vasantrao Naik Marathwada Krishi Vidyapeeth (VNMKV).'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'COT-GIN-01',
        name: 'Cotton Ginning & Pressing Plant Operator',
        enrolled: 1600,
        certified: 1310,
        placed: 740,
        placementRate: 56.5,
        primaryDeficit: 'Moisture restoration and contamination removal scanner operation.'
      }
    ],
    recommendedIntervention: 'Partner with VNMKV Agriculture University to establish Marathwada precision cotton and pulses processing incubator.',
    interventionStrategy: {
      priority: 'Medium-term (1-3 Months)',
      keyActions: [
        'Roll out VNMKV joint certification for farm automation.',
        'Facilitate Mudra microcredit for veterinary technicians.'
      ],
      partnerAgencies: ['VNMKV Parbhani', 'District Skill Committee', 'MSSDS'],
      budgetEstimateLakhs: 180,
      expectedOutcomeLift: '+8.6% local placement conversion'
    },
    primaryIndustrialClusters: ['Parbhani MIDC', 'Jintur Agro Belt', 'Gangakhed Sugar Complex'],
    activeTrainingCentres: 42,
    averageStartingSalaryMonthly: 14700,
    femaleParticipationRate: 38.4,
    epfoVerificationRate: 64.8
  },
  {
    id: 'Hingoli',
    name: 'Hingoli',
    marathiName: 'हिंगोली',
    division: 'Chhatrapati Sambhajinagar',
    totalTrainees: 10800,
    certifiedTrainees: 8532,
    employedTrainees: 4522,
    selfEmployedTrainees: 2133,
    seekingEmploymentTrainees: 1450,
    droppedOutTrainees: 2268,
    untraceableTrainees: 427,
    furtherEducationTrainees: 171,
    completionRate: 79.0,
    employmentRate: 53.0,
    selfEmploymentRate: 25.0,
    retentionRate: 59.0,
    threeMonthRetentionRate: 69.5,
    twelveMonthRetentionRate: 51.0,
    skillGapIntensity: 67.5,
    topSkillGap: 'Turmeric Oleoresin Extraction, LIGO Precision Astronomy Tech & Solar Pumps',
    topSkillGaps: [
      {
        id: 'hng-gap-1',
        name: 'Turmeric Curing & Curcumin Content Spectrophotometry',
        category: 'Technical',
        severity: 'Critical',
        affectedTrainees: 1150,
        gapPercentage: 66,
        employerDemandSurge: '+70% demand in Basmath (one of Asia’s largest turmeric markets)',
        recommendedAction: 'Build steam boiler curing and spectrophotometer test lab in Basmath.'
      },
      {
        id: 'hng-gap-2',
        name: 'Precision Vacuum & Seismic Sensor Tech (LIGO-India Project)',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 450,
        gapPercentage: 60,
        employerDemandSurge: 'High local technician demand for upcoming LIGO-India Gravitational Wave Observatory in Aundha Nagnath',
        recommendedAction: 'Establish ultra-high vacuum and opto-electronics training cell in Aundha.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'TRM-CUR-01',
        name: 'Turmeric Processing & Boiler Plant Operator',
        enrolled: 1400,
        certified: 1100,
        placed: 580,
        placementRate: 52.7,
        primaryDeficit: 'Overheating damage during boiler cooking and uneven drying losses.'
      }
    ],
    recommendedIntervention: 'Form "Basmath Turmeric & Spice Park" training academy and prepare local technicians for the flagship mega-science LIGO-India observatory.',
    interventionStrategy: {
      priority: 'Immediate (0-30 Days)',
      keyActions: [
        'Deploy Basmath spice testing mobile laboratory.',
        'Introduce specialized ultra-cleanroom technician courses in coordination with LIGO-India / IUCAA.'
      ],
      partnerAgencies: ['LIGO-India Project', 'Basmath Turmeric Market', 'MSSDS'],
      budgetEstimateLakhs: 220,
      expectedOutcomeLift: '+13.5% in high-value technical placements'
    },
    primaryIndustrialClusters: ['Basmath Turmeric Hub', 'Hingoli MIDC', 'Aundha Nagnath Tech Corridor'],
    activeTrainingCentres: 30,
    averageStartingSalaryMonthly: 14400,
    femaleParticipationRate: 40.0,
    epfoVerificationRate: 60.2
  },
  {
    id: 'Nanded',
    name: 'Nanded',
    marathiName: 'नांदेड',
    division: 'Chhatrapati Sambhajinagar',
    totalTrainees: 20400,
    certifiedTrainees: 17136,
    employedTrainees: 10967,
    selfEmployedTrainees: 3084,
    seekingEmploymentTrainees: 2228,
    droppedOutTrainees: 3264,
    untraceableTrainees: 685,
    furtherEducationTrainees: 343,
    completionRate: 84.0,
    employmentRate: 64.0,
    selfEmploymentRate: 18.0,
    retentionRate: 69.5,
    threeMonthRetentionRate: 78.5,
    twelveMonthRetentionRate: 62.0,
    skillGapIntensity: 50.8,
    topSkillGap: 'Textile Processing, Hospitality Management & Agri-Seed Processing',
    topSkillGaps: [
      {
        id: 'ndd-gap-1',
        name: 'Pilgrim Hospitality & Tourism Guest Relations',
        category: 'Soft Skills',
        severity: 'Moderate',
        affectedTrainees: 1400,
        gapPercentage: 46,
        employerDemandSurge: '+55% demand catering to national and international visitors to Hazur Sahib Gurdwara',
        recommendedAction: 'Institute multi-lingual hospitality & front-office certifications.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'HOSP-GR-01',
        name: 'Hotel & Pilgrimage Tourism Front Office Associate',
        enrolled: 1800,
        certified: 1510,
        placed: 980,
        placementRate: 64.9,
        primaryDeficit: 'Multilingual fluency (Punjabi/English/Hindi) and modern PMS software.'
      }
    ],
    recommendedIntervention: 'Form joint hospitality academy with Hazur Sahib Board and upgrade Kushnoor MIDC pharmaceutical manufacturing units.',
    interventionStrategy: {
      priority: 'Medium-term (1-3 Months)',
      keyActions: [
        'Establish Hazur Sahib Hospitality Excellence Center.',
        'Form Pharma Apprentice Consortium in Kushnoor MIDC.'
      ],
      partnerAgencies: ['Hazur Sahib Board', 'Kushnoor Industries', 'MSSDS'],
      budgetEstimateLakhs: 210,
      expectedOutcomeLift: '+8.2% in service sector placements'
    },
    primaryIndustrialClusters: ['Kushnoor MIDC', 'Dhanegaon Industrial Area', 'Hazur Sahib Tourism Hub'],
    activeTrainingCentres: 58,
    averageStartingSalaryMonthly: 16100,
    femaleParticipationRate: 39.5,
    epfoVerificationRate: 71.0
  },
  {
    id: 'Beed',
    name: 'Beed',
    marathiName: 'बीड',
    division: 'Chhatrapati Sambhajinagar',
    totalTrainees: 21600,
    certifiedTrainees: 16848,
    employedTrainees: 8761,
    selfEmployedTrainees: 3875,
    seekingEmploymentTrainees: 3033,
    droppedOutTrainees: 4752,
    untraceableTrainees: 1179,
    furtherEducationTrainees: 337,
    completionRate: 78.0,
    employmentRate: 52.0,
    selfEmploymentRate: 23.0,
    retentionRate: 57.5,
    threeMonthRetentionRate: 68.0,
    twelveMonthRetentionRate: 49.5,
    skillGapIntensity: 71.2,
    topSkillGap: 'Seasonal Migration Prevention Skilling, Harvester Operations & Micro-Solar',
    topSkillGaps: [
      {
        id: 'bed-gap-1',
        name: 'Mechanical Sugarcane Harvester Operator',
        category: 'Technical',
        severity: 'Critical',
        affectedTrainees: 2400,
        gapPercentage: 72,
        employerDemandSurge: '+110% demand as sugar factories transition from manual cane-cutters to harvesters',
        recommendedAction: 'Deploy sugarcane harvester simulators across Georai and Majalgaon ITIs.'
      },
      {
        id: 'bed-gap-2',
        name: 'Off-Farm Rural Electrician & Two-Wheeler EV Mechanics',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1850,
        gapPercentage: 64,
        employerDemandSurge: 'High local demand to create stable year-round village employment',
        recommendedAction: 'Equip mobile training vans with EV and BLDC motor testing kits.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'AGR-HRV-01',
        name: 'Sugarcane Mechanical Harvester Driver & Mechanic',
        enrolled: 2200,
        certified: 1710,
        placed: 890,
        placementRate: 52.0,
        primaryDeficit: 'Hydraulic cutter blade alignment and nocturnal GPS field tracking.'
      }
    ],
    recommendedIntervention: 'Institute "Beed Sthairya Mission" offering 100% sponsored skilling with Rs 4,000 monthly stipend to break the generational cycle of migrant cane-cutter distress.',
    interventionStrategy: {
      priority: 'Immediate (0-30 Days)',
      keyActions: [
        'Roll out Gopinath Munde Sugarcane Cutter Welfare Board skilling packages.',
        'Facilitate fast-track auto-apprentice linkages with Pune and Aurangabad plants for youth wanting to migrate permanently with EPFO formal jobs.'
      ],
      partnerAgencies: ['Sugarcane Cutters Welfare Board', 'MSSDS Beed', 'Bajaj Auto CSR'],
      budgetEstimateLakhs: 430,
      expectedOutcomeLift: '+18.4% reduction in seasonal migration dropouts'
    },
    primaryIndustrialClusters: ['Beed Industrial Area', 'Parli Thermal Power Station', 'Majalgaon Agro Belt'],
    activeTrainingCentres: 54,
    averageStartingSalaryMonthly: 14500,
    femaleParticipationRate: 42.8,
    epfoVerificationRate: 59.1
  },
  {
    id: 'Latur',
    name: 'Latur',
    marathiName: 'लातूर',
    division: 'Chhatrapati Sambhajinagar',
    totalTrainees: 22100,
    certifiedTrainees: 18785,
    employedTrainees: 12210,
    selfEmployedTrainees: 3381,
    seekingEmploymentTrainees: 2254,
    droppedOutTrainees: 3315,
    untraceableTrainees: 751,
    furtherEducationTrainees: 376,
    completionRate: 85.0,
    employmentRate: 65.0,
    selfEmploymentRate: 18.0,
    retentionRate: 71.5,
    threeMonthRetentionRate: 80.2,
    twelveMonthRetentionRate: 64.5,
    skillGapIntensity: 48.0,
    topSkillGap: 'Rail Coach Electrical Assembly, Soybean Oil Refining & EdTech Operations',
    topSkillGaps: [
      {
        id: 'lat-gap-1',
        name: 'High-Speed Rail Coach Wiring & Pneumatic Braking (Marathwada Rail Coach Factory)',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1900,
        gapPercentage: 47,
        employerDemandSurge: '+80% demand at Indian Railways / Vande Bharat Marathwada Rail Coach Factory',
        recommendedAction: 'Construct railway bogie and HVAC wiring simulator at Latur Government Polytechnic.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'RLY-ELC-01',
        name: 'Railway Coach Wiring & Harnessing Technician',
        enrolled: 2400,
        certified: 2040,
        placed: 1390,
        placementRate: 68.1,
        primaryDeficit: 'Flame-retardant cable bundling and vacuum circuit breaker testing.'
      }
    ],
    recommendedIntervention: 'Create dedicated Vande Bharat Railway Skilling Academy partnering with Rail Vikas Nigam Ltd (RVNL) and Kinet Railway Solutions.',
    interventionStrategy: {
      priority: 'Immediate (0-30 Days)',
      keyActions: [
        'Form anchor apprentice tie-up with Marathwada Rail Coach Factory.',
        'Capitalize on Latur education hub brand to train 2,000 digital tutors and coders.'
      ],
      partnerAgencies: ['RVNL', 'Kinet Railway Solutions', 'MSSDS Latur'],
      budgetEstimateLakhs: 340,
      expectedOutcomeLift: '+12.0% in high-wage railway engineering jobs'
    },
    primaryIndustrialClusters: ['Marathwada Rail Coach Factory', 'Additional Latur MIDC', 'Ausa Agro Zone'],
    activeTrainingCentres: 64,
    averageStartingSalaryMonthly: 17600,
    femaleParticipationRate: 41.0,
    epfoVerificationRate: 75.4
  },
  {
    id: 'Osmanabad',
    name: 'Osmanabad',
    marathiName: 'धाराशिव (उस्मानाबाद)',
    division: 'Chhatrapati Sambhajinagar',
    totalTrainees: 13400,
    certifiedTrainees: 10720,
    employedTrainees: 5896,
    selfEmployedTrainees: 2573,
    seekingEmploymentTrainees: 1715,
    droppedOutTrainees: 2680,
    untraceableTrainees: 536,
    furtherEducationTrainees: 214,
    completionRate: 80.0,
    employmentRate: 55.0,
    selfEmploymentRate: 24.0,
    retentionRate: 61.5,
    threeMonthRetentionRate: 71.0,
    twelveMonthRetentionRate: 53.0,
    skillGapIntensity: 64.0,
    topSkillGap: 'Solar Park Operations, Goat Farm Value Addition & Agro-Drip Automation',
    topSkillGaps: [
      {
        id: 'osm-gap-1',
        name: 'Utility Scale Solar PV String Inverter Troubleshooting',
        category: 'Technical',
        severity: 'High',
        affectedTrainees: 1200,
        gapPercentage: 60,
        employerDemandSurge: '+75% demand due to large solar power parks in drought-prone Marathwada',
        recommendedAction: 'Install grid-connected solar tracker field at Osmanabad ITI.'
      }
    ],
    mostAffectedPrograms: [
      {
        code: 'SOL-UTL-01',
        name: 'Utility Solar PV Plant Operations Technician',
        enrolled: 1500,
        certified: 1200,
        placed: 660,
        placementRate: 55.0,
        primaryDeficit: 'Thermographic drone inspection and string-level fault isolation.'
      }
    ],
    recommendedIntervention: 'Capitalize on Osmanabad’s position as a renewable solar capital by establishing a Solar & Wind Energy Operations Center of Excellence.',
    interventionStrategy: {
      priority: 'Medium-term (1-3 Months)',
      keyActions: [
        'Partner with independent power producers (IPPs) for guaranteed apprentice slots.',
        'Scale Osmanabadi goat breed meat processing and cold-chain cooperatives.'
      ],
      partnerAgencies: ['MEDA', 'Solar Power Developers Association', 'MSSDS'],
      budgetEstimateLakhs: 200,
      expectedOutcomeLift: '+11.5% in green energy wage employment'
    },
    primaryIndustrialClusters: ['Osmanabad MIDC', 'Tuljapur Tourism Belt', 'Omerga Agro Hub'],
    activeTrainingCentres: 38,
    averageStartingSalaryMonthly: 14600,
    femaleParticipationRate: 40.5,
    epfoVerificationRate: 62.0
  }
];

// Calculate aggregated summary statistics for dashboard and consistency check
export const MAHARASHTRA_SUMMARY_METRICS = {
  totalDistricts: MAHARASHTRA_DISTRICTS_DATA.length,
  totalEnrolled: MAHARASHTRA_DISTRICTS_DATA.reduce((acc, d) => acc + d.totalTrainees, 0),
  totalCertified: MAHARASHTRA_DISTRICTS_DATA.reduce((acc, d) => acc + d.certifiedTrainees, 0),
  totalEmployed: MAHARASHTRA_DISTRICTS_DATA.reduce((acc, d) => acc + d.employedTrainees, 0),
  totalSelfEmployed: MAHARASHTRA_DISTRICTS_DATA.reduce((acc, d) => acc + d.selfEmployedTrainees, 0),
  totalSeekingEmployment: MAHARASHTRA_DISTRICTS_DATA.reduce((acc, d) => acc + d.seekingEmploymentTrainees, 0),
  totalDroppedOut: MAHARASHTRA_DISTRICTS_DATA.reduce((acc, d) => acc + d.droppedOutTrainees, 0),
  totalUntraceableLeakage: MAHARASHTRA_DISTRICTS_DATA.reduce((acc, d) => acc + d.untraceableTrainees, 0),
  
  // Weighted Averages
  get averageCompletionRate() {
    return Math.round((this.totalCertified / this.totalEnrolled) * 1000) / 10;
  },
  get averageEmploymentRate() {
    return Math.round((this.totalEmployed / this.totalCertified) * 1000) / 10;
  },
  get averageSelfEmploymentRate() {
    return Math.round((this.totalSelfEmployed / this.totalCertified) * 1000) / 10;
  },
  get average6MonthRetentionRate() {
    const totalRetained = MAHARASHTRA_DISTRICTS_DATA.reduce((acc, d) => acc + (d.employedTrainees * (d.retentionRate / 100)), 0);
    return Math.round((totalRetained / this.totalEmployed) * 1000) / 10;
  },
  get averageEpfoVerificationRate() {
    const totalVerified = MAHARASHTRA_DISTRICTS_DATA.reduce((acc, d) => acc + (d.employedTrainees * (d.epfoVerificationRate / 100)), 0);
    return Math.round((totalVerified / this.totalEmployed) * 1000) / 10;
  }
};

// Lifecycle Flowchart Nodes covering ALL possible outcomes in the skilling tracking lifecycle
export const SKILLING_LIFECYCLE_NODES: OutcomeStageNode[] = [
  {
    id: 'node-mobilized',
    title: 'Mobilized & Registered Youth',
    stageNumber: 1,
    category: 'input',
    count: 765000,
    percentageOfEnrolled: 114.5,
    description: 'Candidates registered across Kaushalya Rozgar Melas, ITI counseling, and online MSSDS portal.',
    trackingMechanism: 'Aadhaar / DigiLocker registration with APAAR / ABC ID',
    childrenIds: ['node-enrolled']
  },
  {
    id: 'node-enrolled',
    title: 'Formally Enrolled Trainees',
    stageNumber: 2,
    category: 'training',
    count: 668000,
    percentageOfEnrolled: 100.0,
    description: 'Admitted into NSQF-aligned courses across government ITIs, polytechnics, and private training providers.',
    trackingMechanism: 'Biometric daily attendance & Smart Class RFID verification',
    childrenIds: ['node-completed', 'node-training-dropout']
  },
  {
    id: 'node-training-dropout',
    title: 'Training Phase Dropouts',
    stageNumber: 2,
    category: 'leakage',
    count: 98400,
    percentageOfEnrolled: 14.7,
    description: 'Discontinued mid-course due to migration, domestic caregiving duties, transport cost, or urgent informal work.',
    riskFactor: 'High early leakage in tribal and drought-affected belts (Gadchiroli, Beed, Nandurbar).',
    trackingMechanism: 'Automated 7-day absence alerts triggered via AI SMS/IVR system',
    childrenIds: []
  },
  {
    id: 'node-completed',
    title: 'Completed Training Course',
    stageNumber: 3,
    category: 'training',
    count: 569600,
    percentageOfEnrolled: 85.3,
    description: 'Finished prescribed 300 to 600 hours of classroom and practical lab instruction.',
    trackingMechanism: 'Training provider batch completion log verified by District Skill Officer',
    childrenIds: ['node-certified', 'node-assessment-failed', 'node-assessment-absent']
  },
  {
    id: 'node-assessment-absent',
    title: 'Assessment Absenteeism',
    stageNumber: 3,
    category: 'leakage',
    count: 24200,
    percentageOfEnrolled: 3.6,
    description: 'Completed coursework but did not appear for Sector Skill Council final third-party examination.',
    riskFactor: 'Examination fee barrier or exam center travel distance.',
    trackingMechanism: 'Third-party Sector Skill Council (SSC) biometric exam log',
    childrenIds: []
  },
  {
    id: 'node-assessment-failed',
    title: 'Failed Assessment (Remedial)',
    stageNumber: 3,
    category: 'leakage',
    count: 31400,
    percentageOfEnrolled: 4.7,
    description: 'Scored below passing threshold in practical or theory test. Queued for remedial re-training.',
    riskFactor: 'Significant skill deficit in machinery operation and English terminology.',
    trackingMechanism: 'Automated remediation ticketing in MSSDS exam database',
    childrenIds: []
  },
  {
    id: 'node-certified',
    title: 'NSQF Certified Candidates',
    stageNumber: 4,
    category: 'assessment',
    count: 514000,
    percentageOfEnrolled: 76.9,
    description: 'Awarded government-recognized NSQF Level 3/4/5 verifiable digital certificates via DigiLocker.',
    trackingMechanism: 'DigiLocker QR code verifiable credential issued on blockchain',
    childrenIds: [
      'node-formal-wage',
      'node-self-employed',
      'node-apprenticeship',
      'node-unplaced-seeking',
      'node-further-education',
      'node-inactive-workforce',
      'node-untraceable'
    ]
  },
  // All Outcomes from Certified Trainees (Crucial "Certified ≠ Employed" breakdown)
  {
    id: 'node-formal-wage',
    title: 'Formal Wage Employment (EPFO Verified)',
    stageNumber: 5,
    category: 'placement',
    count: 345000,
    percentageOfEnrolled: 51.6,
    description: 'Secured payroll jobs with monthly salary above minimum wage, validated through live EPFO UAN salary credit.',
    trackingMechanism: 'Direct API integration with Employees’ Provident Fund Organisation (EPFO)',
    childrenIds: ['node-retention-3mo', 'node-placement-dropout']
  },
  {
    id: 'node-apprenticeship',
    title: 'On-the-Job Apprenticeship (NAPS / NATS)',
    stageNumber: 5,
    category: 'placement',
    count: 42000,
    percentageOfEnrolled: 6.3,
    description: 'Placed in registered 1-year stipendiary industrial apprenticeships under National Apprenticeship Promotion Scheme.',
    trackingMechanism: 'NAPS 2.0 portal contract number & DBT stipend transfer ledger',
    childrenIds: ['node-retention-3mo']
  },
  {
    id: 'node-self-employed',
    title: 'Self-Employed & Micro-Enterprise',
    stageNumber: 5,
    category: 'placement',
    count: 73500,
    percentageOfEnrolled: 11.0,
    description: 'Started proprietary trade, repair workshop, agro-service, or salon with Udyam registration or Mudra bank loan.',
    trackingMechanism: 'Udyam Aadhaar verification & Mudra loan account validation via PFMS',
    childrenIds: ['node-retention-6mo']
  },
  {
    id: 'node-further-education',
    title: 'Higher Education / Polytechnic Lateral Entry',
    stageNumber: 5,
    category: 'placement',
    count: 12400,
    percentageOfEnrolled: 1.9,
    description: 'Pursued diploma, engineering degree, or advanced specialized training programs.',
    trackingMechanism: 'Academic Bank of Credits (ABC) & AISHE student ID linkage',
    childrenIds: []
  },
  {
    id: 'node-unplaced-seeking',
    title: 'Unplaced & Actively Seeking Job',
    stageNumber: 5,
    category: 'leakage',
    count: 48600,
    percentageOfEnrolled: 7.3,
    description: 'Certified candidates who have not yet secured employment. Require matching via Kaushalya Melas.',
    riskFactor: 'Mismatch between candidate wage expectations and entry-level industrial offers.',
    trackingMechanism: 'Quarterly mobile app pulse poll & Rozgar Mela attendance tracking',
    childrenIds: []
  },
  {
    id: 'node-inactive-workforce',
    title: 'Opted Out / Inactive in Workforce',
    stageNumber: 5,
    category: 'leakage',
    count: 14500,
    percentageOfEnrolled: 2.2,
    description: 'Withdrew from job market due to marriage, health issues, family care obligations, or discouragement.',
    riskFactor: 'Disproportionately impacts rural female candidates (over 68% of inactive category).',
    trackingMechanism: 'DSC field survey and telephonic outcome verification audits',
    childrenIds: []
  },
  {
    id: 'node-untraceable',
    title: 'Untraceable / Contact Lost (Tracking Leakage)',
    stageNumber: 5,
    category: 'leakage',
    count: 18000,
    percentageOfEnrolled: 2.7,
    description: 'Mobile number changed, migrated without forwarding details, or employer did not report status. THE CORE PROBLEM STATEMENT!',
    riskFactor: 'Historic blind-spot in government audits; solved via automated DigiLocker and EPFO sync.',
    trackingMechanism: 'AI WhatsApp conversational bot & Aadhaar PAN linkage triggers',
    childrenIds: []
  },
  // Longitudinal Retention Nodes
  {
    id: 'node-retention-3mo',
    title: '3-Month Sustained Retention',
    stageNumber: 6,
    category: 'retention',
    count: 312000,
    percentageOfEnrolled: 46.7,
    description: 'Maintained continuous formal employment for 90 days. Mandatory trigger for final 20% provider payout.',
    trackingMechanism: 'Triple consecutive monthly EPFO electronic challan-cum-return (ECR) logs',
    childrenIds: ['node-retention-6mo', 'node-retention-dropout']
  },
  {
    id: 'node-retention-dropout',
    title: 'Post-Placement Attrition (Months 1-3)',
    stageNumber: 6,
    category: 'leakage',
    count: 33000,
    percentageOfEnrolled: 4.9,
    description: 'Resigned or laid off within first 90 days due to difficult working conditions, low net pay, or relocation friction.',
    riskFactor: 'Hostel availability and inter-district relocation shock.',
    trackingMechanism: 'EPFO exit code reporting and grievance hotline logging',
    childrenIds: []
  },
  {
    id: 'node-retention-6mo',
    title: '6-Month Longitudinal Retention (Key KPI)',
    stageNumber: 7,
    category: 'retention',
    count: 278000,
    percentageOfEnrolled: 41.6,
    description: 'Core benchmark for sustainable livelihood generation. Candidate has overcome initial onboarding attrition.',
    trackingMechanism: '6 consecutive monthly EPFO / bank salary deposit credits',
    childrenIds: ['node-retention-12mo']
  },
  {
    id: 'node-retention-12mo',
    title: '12-Month Retention & Career Growth',
    stageNumber: 8,
    category: 'retention',
    count: 236000,
    percentageOfEnrolled: 35.3,
    description: 'Completed 1 full year in workforce, with average wage increase of 18.4% above entry-level salary.',
    trackingMechanism: 'Annual EPFO contribution progression and GST return filings',
    childrenIds: []
  }
];

// Sample candidates for DPI-based longitudinal verification simulator
export const SAMPLE_VERIFICATION_CANDIDATES: VerificationCandidate[] = [
  {
    id: 'CAND-2026-8812',
    name: 'Pooja Vishwanath Gaikwad',
    aadhaarMasked: 'XXXX-XXXX-4819',
    district: 'Pune',
    sector: 'Automotive & EV',
    courseName: 'Automotive Mechatronics Technician (NSQF Level 4)',
    completionDate: '15 Oct 2025',
    certificationStatus: 'Certified',
    employmentStatus: 'EPFO Verified',
    uanNumber: '101849204912',
    employerName: 'Tata Motors Passenger Vehicles Ltd, Chakan',
    monthlySalary: 23500,
    retentionMonths: 9,
    lastVerificationDate: '01 Mar 2026',
    verificationSource: 'EPFO UAN'
  },
  {
    id: 'CAND-2026-4421',
    name: 'Rohan Suresh Shinde',
    aadhaarMasked: 'XXXX-XXXX-9214',
    district: 'Nagpur',
    sector: 'Logistics',
    courseName: 'Automated Warehouse Inventory Associate (NSQF Level 3)',
    completionDate: '28 Nov 2025',
    certificationStatus: 'Certified',
    employmentStatus: 'EPFO Verified',
    uanNumber: '101984210984',
    employerName: 'DHL Supply Chain India Pvt Ltd, MIHAN',
    monthlySalary: 19800,
    retentionMonths: 4,
    lastVerificationDate: '02 Mar 2026',
    verificationSource: 'EPFO UAN'
  },
  {
    id: 'CAND-2026-1198',
    name: 'Surekha Madhav Atram',
    aadhaarMasked: 'XXXX-XXXX-3312',
    district: 'Gadchiroli',
    sector: 'Forest & Mining',
    courseName: 'Heavy Earthmoving Machinery Operator',
    completionDate: '12 Aug 2025',
    certificationStatus: 'Certified',
    employmentStatus: 'EPFO Verified',
    uanNumber: '101748291039',
    employerName: 'Lloyds Metals & Energy Ltd, Surjagarh',
    monthlySalary: 22000,
    retentionMonths: 7,
    lastVerificationDate: '28 Feb 2026',
    verificationSource: 'EPFO UAN'
  },
  {
    id: 'CAND-2026-6733',
    name: 'Vikram Dashrath Patil',
    aadhaarMasked: 'XXXX-XXXX-7721',
    district: 'Kolhapur',
    sector: 'Manufacturing',
    courseName: 'CNC Milling & Turning Operator (NSQF Level 4)',
    completionDate: '04 Jan 2026',
    certificationStatus: 'Certified',
    employmentStatus: 'Apprentice (NAPS)',
    employerName: 'Menon & Menon Foundry Ltd, Shiroli',
    monthlySalary: 14500,
    retentionMonths: 2,
    lastVerificationDate: '04 Mar 2026',
    verificationSource: 'DigiLocker'
  },
  {
    id: 'CAND-2026-9041',
    name: 'Anjali Sanjay Jadhav',
    aadhaarMasked: 'XXXX-XXXX-5520',
    district: 'Solapur',
    sector: 'Textiles',
    courseName: 'Digital Jacquard Weaving & Design Operator',
    completionDate: '20 Sep 2025',
    certificationStatus: 'Certified',
    employmentStatus: 'Self-Employed (Udyam)',
    employerName: 'Shri Swami Samarth Jacquard Tex (Udyam: MH-26-004819)',
    monthlySalary: 18000,
    retentionMonths: 6,
    lastVerificationDate: '25 Feb 2026',
    verificationSource: 'GSTN / Udyam'
  },
  {
    id: 'CAND-2026-3390',
    name: 'Akash Balasaheb Munde',
    aadhaarMasked: 'XXXX-XXXX-1948',
    district: 'Beed',
    sector: 'Agriculture & Machinery',
    courseName: 'Tractor & Harvester Service Mechanic',
    completionDate: '10 Nov 2025',
    certificationStatus: 'Certified',
    employmentStatus: 'Underemployed',
    monthlySalary: 7500,
    retentionMonths: 1,
    lastVerificationDate: '15 Feb 2026',
    verificationSource: 'AI WhatsApp Pulse'
  },
  {
    id: 'CAND-2026-5512',
    name: 'Deepak Kisan Rathod',
    aadhaarMasked: 'XXXX-XXXX-8821',
    district: 'Nandurbar',
    sector: 'Renewable Energy',
    courseName: 'Solar PV Rooftop Grid Installer',
    completionDate: '05 Dec 2025',
    certificationStatus: 'Certified',
    employmentStatus: 'Unverified / Contact Lost',
    retentionMonths: 0,
    lastVerificationDate: '10 Jan 2026',
    verificationSource: 'Field DSC Survey'
  }
];
