import React, { useState, useMemo } from 'react';
import { 
  AlertTriangle, 
  Search, 
  Filter, 
  Sparkles, 
  ArrowUpRight, 
  Users, 
  Layers, 
  TrendingUp, 
  Building2,
  CheckCircle,
  BarChart3
} from 'lucide-react';
import { DistrictData, SkillGapItem } from '../types';
import { MAHARASHTRA_DISTRICTS_DATA } from '../data/maharashtraData';

interface SkillGapIntelligenceProps {
  selectedDistrict: DistrictData | null;
  onSelectDistrict: (district: DistrictData) => void;
}

export const SkillGapIntelligence: React.FC<SkillGapIntelligenceProps> = ({
  selectedDistrict,
  onSelectDistrict
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [severityFilter, setSeverityFilter] = useState<'All' | 'Critical' | 'High' | 'Moderate'>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  // Flatten all skill gaps across all districts with parent district info
  const allGaps = useMemo(() => {
    const list: (SkillGapItem & { district: DistrictData })[] = [];
    MAHARASHTRA_DISTRICTS_DATA.forEach((d) => {
      d.topSkillGaps.forEach((g) => {
        list.push({ ...g, district: d });
      });
    });
    return list;
  }, []);

  // Filtered gaps
  const filteredGaps = useMemo(() => {
    return allGaps.filter((item) => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.district.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.employerDemandSurge.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSeverity = severityFilter === 'All' || item.severity === severityFilter;
      const matchesCategory = categoryFilter === 'All' || item.category === categoryFilter;

      // If a district is selected, prioritize or focus on it
      const matchesDistrict = !selectedDistrict || item.district.id === selectedDistrict.id;

      return matchesSearch && matchesSeverity && matchesCategory && (selectedDistrict ? matchesDistrict : true);
    });
  }, [allGaps, searchTerm, severityFilter, categoryFilter, selectedDistrict]);

  // Aggregate statistics
  const totalAffectedTrainees = useMemo(() => {
    return allGaps.reduce((acc, g) => acc + g.affectedTrainees, 0);
  }, [allGaps]);

  const criticalGapsCount = useMemo(() => {
    return allGaps.filter(g => g.severity === 'Critical').length;
  }, [allGaps]);

  return (
    <section 
      id="district-wise-skill-gap-intelligence"
      className="bg-[#0A0B10] rounded-2xl border border-[#1F2833] shadow-2xl p-6 my-8 space-y-6 text-[#E0E0E0]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1F2833] pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#1F2833] text-red-400 border border-red-900/50 flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
              Intelligence Dashboard
            </span>
            {selectedDistrict && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#1F2833] text-[#66FCF1] border border-[#1F2833]">
                Filtered: {selectedDistrict.name} District
              </span>
            )}
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
            District-wise Skill Gap Intelligence
          </h2>
          <p className="text-sm text-[#45A29E] mt-0.5">
            Identify curriculum deficiencies, industry labor deficits, and government intervention strategies across Maharashtra.
          </p>
        </div>

        {/* Quick KPI Stat Pills */}
        <div className="flex items-center gap-3">
          <div className="bg-[#0B0C10] border border-[#1F2833] px-3.5 py-2 rounded-xl text-center">
            <span className="text-[11px] font-medium text-red-400 block">Critical Skill Shortages</span>
            <span className="text-lg font-bold text-white block">{criticalGapsCount} Sectors</span>
          </div>
          <div className="bg-[#0B0C10] border border-[#1F2833] px-3.5 py-2 rounded-xl text-center">
            <span className="text-[11px] font-medium text-slate-400 block">Affected Trainees</span>
            <span className="text-lg font-bold text-[#66FCF1] block">{totalAffectedTrainees.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0B0C10] p-3 rounded-xl border border-[#1F2833]">
        <div className="flex flex-wrap items-center gap-2">
          {/* Search */}
          <div className="relative w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill gap, district, or sector..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-[#1F2833] focus:outline-none focus:ring-1 focus:ring-[#66FCF1] bg-[#050608] text-white placeholder:text-slate-500"
            />
          </div>

          {/* Severity Filter */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-400 font-medium ml-2">Severity:</span>
            {(['All', 'Critical', 'High', 'Moderate'] as const).map((sev) => (
              <button
                key={sev}
                onClick={() => setSeverityFilter(sev)}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                  severityFilter === sev
                    ? 'bg-[#66FCF1] text-[#0B0C10] font-bold shadow-md'
                    : 'bg-[#050608] text-slate-400 border border-[#1F2833] hover:text-white hover:bg-[#1F2833]'
                }`}
              >
                {sev}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="text-xs bg-[#050608] border border-[#1F2833] rounded-lg px-2.5 py-1.5 text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#66FCF1]"
          >
            <option value="All">All Categories</option>
            <option value="Technical">Technical</option>
            <option value="Digital & Automation">Digital &amp; Automation</option>
            <option value="Soft Skills">Soft Skills</option>
            <option value="Domain Specific">Domain Specific</option>
          </select>
        </div>

        {selectedDistrict && (
          <button
            onClick={() => onSelectDistrict(null as any)}
            className="text-xs font-semibold text-[#66FCF1] hover:underline"
          >
            Show All Districts
          </button>
        )}
      </div>

      {/* Grid of Skill Gaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGaps.map((gap, idx) => {
          const isCurrentDistrict = selectedDistrict?.id === gap.district.id;

          return (
            <div
              key={`${gap.id}-${idx}`}
              className={`rounded-xl border p-4 transition-all duration-150 flex flex-col justify-between ${
                isCurrentDistrict
                  ? 'border-[#66FCF1] bg-[#0B0C10] shadow-xl ring-1 ring-[#66FCF1]/40'
                  : 'border-[#1F2833] bg-[#0B0C10] hover:border-[#66FCF1]/40 hover:shadow-lg'
              }`}
            >
              <div>
                {/* Top Badge & District Link */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <button
                    onClick={() => onSelectDistrict(gap.district)}
                    className="flex items-center gap-1 text-xs font-bold text-[#66FCF1] hover:underline text-left"
                  >
                    <Building2 className="w-3.5 h-3.5 text-[#66FCF1]" />
                    <span>{gap.district.name} District</span>
                  </button>

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

                <h3 className="text-sm font-bold text-white leading-snug">
                  {gap.name}
                </h3>

                <div className="flex items-center gap-2 mt-1.5 text-[11px] text-slate-400">
                  <span className="bg-[#1F2833] px-2 py-0.5 rounded border border-[#1F2833] font-medium text-slate-300">
                    {gap.category}
                  </span>
                  <span>•</span>
                  <span className="text-red-400 font-bold">
                    {gap.gapPercentage}% Skill Deficit
                  </span>
                </div>

                {/* Trainees Affected & Surge Demand */}
                <div className="mt-3 bg-[#050608] p-2.5 rounded-lg border border-[#1F2833] space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Affected Trainees:</span>
                    <strong className="text-white">{gap.affectedTrainees.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="text-[11px] text-slate-300">
                    <span className="font-semibold text-[#45A29E]">Demand:</span> {gap.employerDemandSurge}
                  </div>
                </div>
              </div>

              {/* Recommended Government Action */}
              <div className="mt-3 pt-3 border-t border-[#1F2833]">
                <div className="flex items-start gap-1.5 text-xs text-[#E0E0E0] bg-[#050608] p-2 rounded-lg border border-[#1F2833]">
                  <Sparkles className="w-3.5 h-3.5 text-[#66FCF1] shrink-0 mt-0.5" />
                  <span className="leading-tight font-medium">
                    <strong className="text-[#66FCF1]">Intervention:</strong> {gap.recommendedAction}
                  </span>
                </div>

                <button
                  onClick={() => onSelectDistrict(gap.district)}
                  className="w-full mt-2.5 py-1.5 px-3 rounded-lg text-xs font-semibold bg-[#1F2833] hover:bg-[#1F2833]/80 text-slate-200 flex items-center justify-center gap-1 transition-colors"
                >
                  <span>View {gap.district.name} Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#66FCF1]" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredGaps.length === 0 && (
        <div className="text-center py-12 bg-[#0B0C10] rounded-xl border border-dashed border-[#1F2833]">
          <AlertTriangle className="w-8 h-8 text-slate-500 mx-auto mb-2" />
          <p className="text-sm font-semibold text-slate-300">No skill gaps found matching filters.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSeverityFilter('All');
              setCategoryFilter('All');
            }}
            className="mt-2 text-xs text-[#66FCF1] font-bold hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};
