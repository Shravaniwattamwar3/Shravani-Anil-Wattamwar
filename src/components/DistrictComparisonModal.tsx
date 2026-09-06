import React, { useState } from 'react';
import { X, ArrowRightLeft, TrendingUp, AlertTriangle, Building2, CheckCircle2, ShieldCheck, Award, Clock } from 'lucide-react';
import { DistrictData } from '../types';
import { MAHARASHTRA_DISTRICTS_DATA } from '../data/maharashtraData';

interface DistrictComparisonModalProps {
  districtA: DistrictData;
  districtB: DistrictData | null;
  onClose: () => void;
  onSelectDistrictB: (district: DistrictData) => void;
}

export const DistrictComparisonModal: React.FC<DistrictComparisonModalProps> = ({
  districtA,
  districtB,
  onClose,
  onSelectDistrictB
}) => {
  // Default second district if null
  const defaultSecond = MAHARASHTRA_DISTRICTS_DATA.find(d => d.id !== districtA.id && (d.id === 'Gadchiroli' || d.id === 'Pune')) || MAHARASHTRA_DISTRICTS_DATA[1];
  const targetB = districtB || defaultSecond;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050608]/80 backdrop-blur-sm">
      <div className="bg-[#0A0B10] rounded-2xl border border-[#1F2833] shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col max-h-[90vh] text-[#E0E0E0]">
        {/* Header */}
        <div className="bg-[#0B0C10] text-white p-5 flex items-center justify-between border-b border-[#1F2833]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#1F2833] text-[#66FCF1] border border-[#1F2833]">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Inter-District Benchmark Comparative</h3>
              <p className="text-xs text-[#45A29E]">Comparing skill outcomes, retention rates, and industrial deficits</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#1F2833] hover:bg-[#66FCF1] hover:text-[#0B0C10] text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* District Selectors */}
        <div className="grid grid-cols-2 gap-4 p-4 bg-[#0B0C10] border-b border-[#1F2833] text-xs">
          <div className="p-3 bg-[#050608] rounded-xl border border-[#1F2833] shadow-xs">
            <span className="text-slate-400 font-medium block">Baseline District A</span>
            <span className="text-base font-extrabold text-white block mt-0.5">{districtA.name}</span>
            <span className="text-[11px] text-[#45A29E]">{districtA.division} Division • {districtA.marathiName}</span>
          </div>

          <div className="p-3 bg-[#050608] rounded-xl border border-[#1F2833] shadow-xs">
            <span className="text-slate-400 font-medium block mb-1">Comparative District B</span>
            <select
              value={targetB.id}
              onChange={(e) => {
                const found = MAHARASHTRA_DISTRICTS_DATA.find(d => d.id === e.target.value);
                if (found) onSelectDistrictB(found);
              }}
              className="w-full text-xs font-bold text-white border border-[#1F2833] rounded-lg p-1.5 focus:ring-1 focus:ring-[#66FCF1] bg-[#0A0B10]"
            >
              {MAHARASHTRA_DISTRICTS_DATA.map((d) => (
                <option key={d.id} value={d.id} disabled={d.id === districtA.id} className="bg-[#0A0B10] text-white">
                  {d.name} ({d.division} Division)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Side by Side Metrics Table */}
        <div className="overflow-y-auto p-6 space-y-6 text-xs text-slate-300">
          {/* Core Comparative KPIs */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Core Performance Indicators
            </h4>
            <div className="border border-[#1F2833] rounded-xl overflow-hidden divide-y divide-[#1F2833] bg-[#0B0C10]">
              {/* Metric 1 */}
              <div className="grid grid-cols-3 p-3 items-center hover:bg-[#1F2833]/30 transition-colors">
                <span className="font-semibold text-slate-200">Employment Conversion Rate</span>
                <span className="font-extrabold text-center text-sm text-emerald-400">{districtA.employmentRate}%</span>
                <span className="font-extrabold text-center text-sm text-emerald-400">{targetB.employmentRate}%</span>
              </div>

              {/* Metric 2 */}
              <div className="grid grid-cols-3 p-3 items-center hover:bg-[#1F2833]/30 transition-colors">
                <span className="font-semibold text-slate-200">6-Month Job Retention</span>
                <span className="font-bold text-center text-[#66FCF1]">{districtA.retentionRate}%</span>
                <span className="font-bold text-center text-[#66FCF1]">{targetB.retentionRate}%</span>
              </div>

              {/* Metric 3 */}
              <div className="grid grid-cols-3 p-3 items-center hover:bg-[#1F2833]/30 transition-colors">
                <span className="font-semibold text-slate-200">EPFO Direct Verification Rate</span>
                <span className="font-bold text-center text-[#45A29E]">{districtA.epfoVerificationRate}%</span>
                <span className="font-bold text-center text-[#45A29E]">{targetB.epfoVerificationRate}%</span>
              </div>

              {/* Metric 4 */}
              <div className="grid grid-cols-3 p-3 items-center hover:bg-[#1F2833]/30 transition-colors">
                <span className="font-semibold text-slate-200">Skill Gap Intensity (Lower is Better)</span>
                <span className={`font-bold text-center ${districtA.skillGapIntensity > 60 ? 'text-red-400' : 'text-emerald-400'}`}>
                  {districtA.skillGapIntensity}/100
                </span>
                <span className={`font-bold text-center ${targetB.skillGapIntensity > 60 ? 'text-red-400' : 'text-emerald-400'}`}>
                  {targetB.skillGapIntensity}/100
                </span>
              </div>

              {/* Metric 5 */}
              <div className="grid grid-cols-3 p-3 items-center hover:bg-[#1F2833]/30 transition-colors">
                <span className="font-semibold text-slate-200">Self-Employment Conversion</span>
                <span className="font-bold text-center text-slate-200">{districtA.selfEmploymentRate}%</span>
                <span className="font-bold text-center text-slate-200">{targetB.selfEmploymentRate}%</span>
              </div>

              {/* Metric 6 */}
              <div className="grid grid-cols-3 p-3 items-center hover:bg-[#1F2833]/30 transition-colors">
                <span className="font-semibold text-slate-200">Average Monthly Wage</span>
                <span className="font-bold text-center text-white">₹{(districtA?.averageStartingSalaryMonthly ?? 0).toLocaleString('en-IN')}</span>
                <span className="font-bold text-center text-white">₹{(targetB?.averageStartingSalaryMonthly ?? 0).toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          {/* Primary Deficits & Interventions */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#0B0C10] p-4 rounded-xl border border-[#1F2833] space-y-2">
              <span className="font-bold text-white block">{districtA.name} Skill Interventions:</span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {districtA.recommendedIntervention}
              </p>
              <div className="pt-2 border-t border-[#1F2833] text-[11px] font-medium text-[#66FCF1]">
                Key Sector: {districtA.primaryIndustrialClusters.join(', ')}
              </div>
            </div>

            <div className="bg-[#0B0C10] p-4 rounded-xl border border-[#1F2833] space-y-2">
              <span className="font-bold text-white block">{targetB.name} Skill Interventions:</span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {targetB.recommendedIntervention}
              </p>
              <div className="pt-2 border-t border-[#1F2833] text-[11px] font-medium text-[#66FCF1]">
                Key Sector: {targetB.primaryIndustrialClusters.join(', ')}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0B0C10] border-t border-[#1F2833] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#1F2833] hover:bg-[#66FCF1] hover:text-[#0B0C10] text-white font-bold text-xs border border-[#1F2833] transition-colors"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
};
