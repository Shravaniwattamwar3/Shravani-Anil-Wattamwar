import React from 'react';
import { 
  X, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Award, 
  Briefcase, 
  AlertTriangle, 
  CheckCircle2, 
  Building2, 
  Calendar, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';
import { DistrictData } from '../types';

interface DistrictDetailPanelProps {
  district: DistrictData | null;
  onClose: () => void;
  onCompareWith?: (district: DistrictData) => void;
}

export const DistrictDetailPanel: React.FC<DistrictDetailPanelProps> = ({ 
  district, 
  onClose,
  onCompareWith 
}) => {
  if (!district) return null;

  return (
    <div 
      id="district-detail-panel"
      className="bg-[#0A0B10] rounded-2xl border border-[#1F2833] shadow-2xl overflow-hidden flex flex-col h-full max-h-[850px] transition-all"
    >
      {/* Panel Header */}
      <div className="bg-gradient-to-r from-[#050608] via-[#0B0C10] to-[#050608] border-b border-[#1F2833] text-white p-5 relative">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#1F2833] text-[#66FCF1] border border-[#1F2833] uppercase tracking-wider">
                {district.division} Division
              </span>
              <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                {district.epfoVerificationRate}% EPFO Verified
              </span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              {district.name}
              <span className="text-sm font-normal text-slate-400">({district.marathiName})</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-[#66FCF1]" />
              <span>{district.activeTrainingCentres} Active Training Centers</span>
              <span className="text-[#1F2833]">•</span>
              <span>Avg Salary: ₹{(district.averageStartingSalaryMonthly ?? 0).toLocaleString('en-IN')}/mo</span>
            </p>
          </div>
          
          <button
            id="close-district-panel-btn"
            onClick={onClose}
            aria-label="Close panel"
            className="p-1.5 rounded-lg bg-[#1F2833] hover:bg-[#1F2833]/80 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Data Notice - MANDATORY REQUIREMENT */}
        <div className="mt-3 py-1 px-2.5 rounded bg-[#1F2833]/60 border border-[#1F2833] text-slate-300 text-[11px] flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-[#66FCF1] shrink-0" />
          <span><strong>SIH 2026 Prototype Notice:</strong> Values represent calibrated mock &amp; pilot survey dataset for government technology evaluation.</span>
        </div>
      </div>

      {/* Scrollable Body */}
      <div className="overflow-y-auto p-5 space-y-6 flex-1 text-[#E0E0E0] text-sm">
        {/* Key KPI Metrics Grid */}
        <div>
          <h3 className="text-xs font-bold text-[#45A29E] uppercase tracking-wider mb-2.5">
            Core Skilling &amp; Employment Metrics
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="bg-[#0B0C10] p-3 rounded-xl border border-[#1F2833]">
              <span className="text-[11px] font-medium text-slate-400 block">Total Trainees</span>
              <span className="text-lg font-bold text-white block mt-0.5">
                {(district.totalTrainees ?? 0).toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-slate-500 block">
                {(district.certifiedTrainees ?? 0).toLocaleString('en-IN')} certified
              </span>
            </div>

            <div className="bg-[#0B0C10] p-3 rounded-xl border border-[#1F2833]">
              <span className="text-[11px] font-medium text-cyan-400 block">Completion Rate</span>
              <span className="text-lg font-bold text-cyan-300 block mt-0.5">
                {district.completionRate}%
              </span>
              <span className="text-[10px] text-slate-500 block">Course completion</span>
            </div>

            <div className="bg-[#0B0C10] p-3 rounded-xl border border-[#1F2833]">
              <span className="text-[11px] font-medium text-[#66FCF1] block">Employment Rate</span>
              <span className="text-lg font-bold text-[#66FCF1] block mt-0.5">
                {district.employmentRate}%
              </span>
              <span className="text-[10px] text-slate-500 block">
                {(district.employedTrainees ?? 0).toLocaleString('en-IN')} wage placed
              </span>
            </div>

            <div className="bg-[#0B0C10] p-3 rounded-xl border border-[#1F2833]">
              <span className="text-[11px] font-medium text-[#45A29E] block">6-Mo Retention</span>
              <span className="text-lg font-bold text-[#45A29E] block mt-0.5">
                {district.retentionRate}%
              </span>
              <span className="text-[10px] text-slate-500 block">Sustainable livelihood</span>
            </div>
          </div>
        </div>

        {/* Secondary Outcomes Breakdown: Certified != Employed highlights */}
        <div className="bg-[#0B0C10] p-4 rounded-xl border border-[#1F2833]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">
              Outcome Distribution (Certified Trainees: {(district.certifiedTrainees ?? 0).toLocaleString('en-IN')})
            </span>
            <span className="text-[11px] font-semibold text-red-400 bg-red-950/40 px-2 py-0.5 rounded border border-red-900/50">
              Certified ≠ Employed
            </span>
          </div>

          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Formal Wage Employed (EPFO/Payroll)</span>
                <span className="font-semibold text-white">
                  {(district.employedTrainees ?? 0).toLocaleString('en-IN')} ({district.employmentRate}%)
                </span>
              </div>
              <div className="w-full bg-[#1F2833] h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#66FCF1] h-full rounded-full transition-all"
                  style={{ width: `${district.employmentRate}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Self-Employed / Micro-Enterprise</span>
                <span className="font-semibold text-white">
                  {(district.selfEmployedTrainees ?? 0).toLocaleString('en-IN')} ({district.selfEmploymentRate}%)
                </span>
              </div>
              <div className="w-full bg-[#1F2833] h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#45A29E] h-full rounded-full transition-all"
                  style={{ width: `${district.selfEmploymentRate}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Actively Seeking Employment / Unplaced</span>
                <span className="font-semibold text-amber-400">
                  {(district.seekingEmploymentTrainees ?? 0).toLocaleString('en-IN')} ({district.certifiedTrainees ? Math.round((district.seekingEmploymentTrainees / district.certifiedTrainees) * 100) : 0}%)
                </span>
              </div>
              <div className="w-full bg-[#1F2833] h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-amber-400 h-full rounded-full transition-all"
                  style={{ width: `${district.certifiedTrainees ? Math.round((district.seekingEmploymentTrainees / district.certifiedTrainees) * 100) : 0}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Untraceable / Contact Lost (Tracking Leakage)</span>
                <span className="font-semibold text-rose-400">
                  {(district.untraceableTrainees ?? 0).toLocaleString('en-IN')} ({district.certifiedTrainees ? Math.round((district.untraceableTrainees / district.certifiedTrainees) * 100) : 0}%)
                </span>
              </div>
              <div className="w-full bg-[#1F2833] h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-rose-500 h-full rounded-full transition-all"
                  style={{ width: `${district.certifiedTrainees ? Math.round((district.untraceableTrainees / district.certifiedTrainees) * 100) : 0}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-[#1F2833] flex items-center justify-between text-[11px] text-slate-400">
            <span>3-Month Retention: <strong className="text-white">{district.threeMonthRetentionRate}%</strong></span>
            <span>12-Month Retention: <strong className="text-white">{district.twelveMonthRetentionRate}%</strong></span>
            <span>Female Ratio: <strong className="text-white">{district.femaleParticipationRate}%</strong></span>
          </div>
        </div>

        {/* Top Skill Gaps (Mandatory Section) */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-[#45A29E] uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              Identified Skill Gaps in {district.name}
            </h3>
            <span className="text-xs font-medium text-slate-400">
              Severity Score: <strong className="text-rose-400">{district.skillGapIntensity}/100</strong>
            </span>
          </div>

          <div className="space-y-2.5">
            {district.topSkillGaps.map((gap) => (
              <div 
                key={gap.id}
                className="p-3 rounded-xl border border-[#1F2833] bg-[#050608] hover:border-[#66FCF1]/40 transition-colors shadow-xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-white">{gap.name}</span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Category: <strong className="text-slate-200">{gap.category}</strong> • Gap: <span className="text-rose-400 font-semibold">{gap.gapPercentage}% deficit</span>
                    </span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                    gap.severity === 'Critical' 
                      ? 'bg-red-950/60 text-red-400 border border-red-800/60' 
                      : gap.severity === 'High'
                      ? 'bg-amber-950/60 text-amber-400 border border-amber-800/60'
                      : 'bg-[#1F2833] text-[#66FCF1] border border-[#1F2833]'
                  }`}>
                    {gap.severity}
                  </span>
                </div>

                <p className="text-xs text-slate-300 mt-2 bg-[#0B0C10] p-2 rounded border border-[#1F2833]">
                  <span className="font-semibold text-[#66FCF1]">Demand:</span> {gap.employerDemandSurge}
                </p>

                <p className="text-xs text-[#45A29E] mt-1.5 font-medium flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-[#66FCF1] shrink-0" />
                  <span>{gap.recommendedAction}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Most Affected Training Programs (Mandatory Section) */}
        <div>
          <h3 className="text-xs font-bold text-[#45A29E] uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#66FCF1]" />
            Most Affected Training Programs
          </h3>

          <div className="space-y-2">
            {district.mostAffectedPrograms.map((prog) => (
              <div 
                key={prog.code}
                className="p-3 rounded-xl bg-[#0B0C10] border border-[#1F2833] text-xs"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-white">{prog.name}</span>
                  <span className="font-mono text-[11px] text-[#66FCF1] bg-[#1F2833] px-1.5 py-0.5 rounded border border-[#1F2833]">
                    {prog.code}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1 py-1.5 text-[11px] text-slate-300 border-y border-[#1F2833] my-1.5">
                  <span>Enrolled: <strong>{prog.enrolled}</strong></span>
                  <span>Certified: <strong>{prog.certified}</strong></span>
                  <span>Placed: <strong className="text-[#66FCF1]">{prog.placed} ({prog.placementRate}%)</strong></span>
                </div>

                <p className="text-slate-300 text-[11px] mt-1">
                  <strong className="text-rose-400">Curriculum Deficit:</strong> {prog.primaryDeficit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Intervention (Mandatory AI Recommendation Section) */}
        <div className="bg-gradient-to-br from-[#0B0C10] to-[#050608] p-4 rounded-xl border border-[#1F2833]">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-[#66FCF1] text-[#0B0C10] rounded-lg">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#66FCF1] uppercase tracking-wider block">
                Policy Intervention Strategy (AI Recommendation)
              </span>
              <span className="text-[11px] text-[#45A29E]">
                District Skill Committee (DSC) Action Plan • Priority: <strong className="text-white">{district.interventionStrategy.priority}</strong>
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-200 leading-relaxed font-medium bg-[#050608] p-3 rounded-lg border border-[#1F2833] mb-3">
            {district.recommendedIntervention}
          </p>

          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-slate-300 block">Prescribed Action Steps:</span>
            {district.interventionStrategy.keyActions.map((action, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#66FCF1] shrink-0 mt-0.5" />
                <span>{action}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-[#1F2833] grid grid-cols-2 gap-2 text-[11px]">
            <div>
              <span className="text-slate-400 block">Est. Budget Allocation:</span>
              <span className="font-bold text-white">₹{district.interventionStrategy.budgetEstimateLakhs} Lakhs</span>
            </div>
            <div>
              <span className="text-slate-400 block">Projected Impact:</span>
              <span className="font-bold text-[#66FCF1]">{district.interventionStrategy.expectedOutcomeLift}</span>
            </div>
          </div>

          <div className="mt-2.5 flex flex-wrap gap-1 items-center text-[10px] text-slate-400">
            <span className="font-medium text-slate-300">Key Stakeholders:</span>
            {district.interventionStrategy.partnerAgencies.map((agency, i) => (
              <span key={i} className="bg-[#1F2833] px-2 py-0.5 rounded border border-[#1F2833] text-slate-300">
                {agency}
              </span>
            ))}
          </div>
        </div>

        {/* Primary Industrial Clusters */}
        <div className="pt-1">
          <span className="text-xs font-bold text-[#45A29E] uppercase tracking-wider block mb-1.5">
            Key Economic &amp; MIDC Clusters
          </span>
          <div className="flex flex-wrap gap-1.5">
            {district.primaryIndustrialClusters.map((cluster, i) => (
              <span 
                key={i}
                className="text-xs bg-[#1F2833] text-slate-300 px-2.5 py-1 rounded-md border border-[#1F2833] flex items-center gap-1"
              >
                <Building2 className="w-3 h-3 text-[#66FCF1]" />
                {cluster}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-4 bg-[#0B0C10] border-t border-[#1F2833] flex items-center justify-between gap-3">
        {onCompareWith && (
          <button
            id="compare-district-btn"
            onClick={() => onCompareWith(district)}
            className="text-xs font-semibold px-3 py-2 rounded-lg bg-[#1F2833] border border-[#1F2833] hover:bg-[#1F2833]/80 text-slate-200 flex items-center gap-1.5 transition-colors"
          >
            <Users className="w-3.5 h-3.5 text-[#66FCF1]" />
            Compare District
          </button>
        )}
        <button
          id="close-district-footer-btn"
          onClick={onClose}
          className="text-xs font-semibold px-4 py-2 rounded-lg bg-[#66FCF1] hover:bg-[#66FCF1]/90 text-[#0B0C10] font-bold transition-colors ml-auto shadow-md"
        >
          Done
        </button>
      </div>
    </div>
  );
};
