/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  Award, 
  Users, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowRight, 
  FileSpreadsheet, 
  MapPin, 
  Layers, 
  Clock, 
  Sparkles,
  Info,
  CheckCircle2,
  Share2,
  Download
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { MaharashtraMap } from './components/MaharashtraMap';
import { DistrictDetailPanel } from './components/DistrictDetailPanel';
import { SkillGapIntelligence } from './components/SkillGapIntelligence';
import { EmploymentOutcomes } from './components/EmploymentOutcomes';
import { OutcomeFlowchart } from './components/OutcomeFlowchart';
import { TrackingVerificationHub } from './components/TrackingVerificationHub';
import { PolicyInterventionSimulator } from './components/PolicyInterventionSimulator';
import { DistrictComparisonModal } from './components/DistrictComparisonModal';
import { DistrictData, MetricType } from './types';
import { MAHARASHTRA_DISTRICTS_DATA, MAHARASHTRA_SUMMARY_METRICS } from './data/maharashtraData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('maharashtra-map-container');
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictData | null>(
    MAHARASHTRA_DISTRICTS_DATA.find(d => d.id === 'Pune') || MAHARASHTRA_DISTRICTS_DATA[0]
  );
  const [activeMetric, setActiveMetric] = useState<MetricType>('employmentRate');
  const [filterDivision, setFilterDivision] = useState<string>('All');
  
  // Comparison modal state
  const [comparisonModalOpen, setComparisonModalOpen] = useState(false);
  const [compareDistrictA, setCompareDistrictA] = useState<DistrictData>(
    selectedDistrict || MAHARASHTRA_DISTRICTS_DATA[0]
  );
  const [compareDistrictB, setCompareDistrictB] = useState<DistrictData | null>(
    MAHARASHTRA_DISTRICTS_DATA.find(d => d.id === 'Gadchiroli') || MAHARASHTRA_DISTRICTS_DATA[1]
  );

  const handleOpenComparison = (district: DistrictData) => {
    setCompareDistrictA(district);
    const other = MAHARASHTRA_DISTRICTS_DATA.find(d => d.id !== district.id && (d.id === 'Gadchiroli' || d.id === 'Pune')) || MAHARASHTRA_DISTRICTS_DATA[0];
    setCompareDistrictB(other);
    setComparisonModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050608] text-[#E0E0E0] font-sans flex flex-col selection:bg-[#66FCF1] selection:text-[#0B0C10]">
      {/* Official Government Navbar */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={(id) => setActiveSection(id)} 
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        
        {/* Executive Hero Banner: Smart India Hackathon 2026 Problem Statement */}
        <section 
          id="executive-summary-banner"
          className="bg-[#0A0B10] text-[#E0E0E0] rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#1F2833] relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_#1F2833_0%,_#0A0B10_65%)]"
        >
          {/* Background decorative glows */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-[#66FCF1]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-[#45A29E]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-[#66FCF1] text-[#0B0C10] uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                SIH 2026 Innovation Platform
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1F2833]/70 text-[#45A29E] border border-[#1F2833]">
                Problem Statement ID: SIH-2026-SKILL-01
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                Live Maharashtra State Dataset
              </span>
            </div>

            <div className="max-w-4xl space-y-2">
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Addressing Difficulties in Tracking Employment Outcomes, Skill Gaps, &amp; Skilling Impact
              </h1>
              <p className="text-sm sm:text-base text-[#E0E0E0]/80 leading-relaxed">
                A next-generation Digital Public Infrastructure (DPI) analytics suite for the Government of Maharashtra. 
                Integrating automated EPFO UAN tracking, DigiLocker verified credentials, and high-precision district choropleth intelligence 
                to bridge the critical divide between <strong className="text-[#66FCF1] underline decoration-[#66FCF1]/60 decoration-2 underline-offset-4">Certification</strong> and <strong className="text-emerald-400 underline decoration-emerald-400/60 decoration-2 underline-offset-4">Sustainable Employment</strong>.
              </p>
            </div>

            {/* Quick KPI Stat Bar */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 border-t border-[#1F2833]">
              <div className="bg-[#050608]/80 backdrop-blur-xs p-3.5 rounded-xl border border-[#1F2833]">
                <span className="text-[11px] font-bold text-[#45A29E] uppercase tracking-wider block">Total Trainees</span>
                <span className="text-xl font-bold text-white block mt-0.5">
                  {MAHARASHTRA_SUMMARY_METRICS.totalEnrolled.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-slate-400">Across 36 Districts</span>
              </div>

              <div className="bg-[#050608]/80 backdrop-blur-xs p-3.5 rounded-xl border border-[#1F2833]">
                <span className="text-[11px] font-bold text-[#66FCF1] uppercase tracking-wider block">State Certified</span>
                <span className="text-xl font-bold text-[#66FCF1] block mt-0.5">
                  {MAHARASHTRA_SUMMARY_METRICS.totalCertified.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-cyan-400/70">85.1% Completion Rate</span>
              </div>

              <div className="bg-[#050608]/80 backdrop-blur-xs p-3.5 rounded-xl border border-[#1F2833]">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">Wage Employed</span>
                <span className="text-xl font-bold text-emerald-400 block mt-0.5">
                  {MAHARASHTRA_SUMMARY_METRICS.totalEmployed.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-emerald-500/80">67.5% Employment Rate</span>
              </div>

              <div className="bg-[#050608]/80 backdrop-blur-xs p-3.5 rounded-xl border border-[#1F2833]">
                <span className="text-[11px] font-bold text-[#45A29E] uppercase tracking-wider block">6-Month Retention</span>
                <span className="text-xl font-bold text-[#45A29E] block mt-0.5">
                  {MAHARASHTRA_SUMMARY_METRICS.average6MonthRetentionRate}%
                </span>
                <span className="text-[10px] text-teal-400/70">Sustainable Livelihood</span>
              </div>

              <div className="bg-[#050608]/80 backdrop-blur-xs p-3.5 rounded-xl border border-[#1F2833] col-span-2 sm:col-span-1">
                <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider block">DPI Verification</span>
                <span className="text-xl font-bold text-purple-300 block mt-0.5">
                  {MAHARASHTRA_SUMMARY_METRICS.averageEpfoVerificationRate}%
                </span>
                <span className="text-[10px] text-purple-400/70">EPFO UAN Verified</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: MANDATORY MAHARASHTRA CHOROPLETH MAP & DETAIL PANEL */}
        <section className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Map Column (8 Cols if district selected, 12 Cols if closed) */}
            <div className={`${selectedDistrict ? 'lg:col-span-7 xl:col-span-8' : 'lg:col-span-12'} transition-all`}>
              <MaharashtraMap
                selectedDistrict={selectedDistrict}
                onSelectDistrict={(d) => setSelectedDistrict(d)}
                activeMetric={activeMetric}
                onChangeMetric={(m) => setActiveMetric(m)}
                filterDivision={filterDivision}
                onSelectDivision={(div) => setFilterDivision(div)}
              />
            </div>

            {/* District Detail Panel Column (4-5 Cols) */}
            {selectedDistrict && (
              <div className="lg:col-span-5 xl:col-span-4 sticky top-20">
                <DistrictDetailPanel
                  district={selectedDistrict}
                  onClose={() => setSelectedDistrict(null)}
                  onCompareWith={(d) => handleOpenComparison(d)}
                />
              </div>
            )}
          </div>

          {!selectedDistrict && (
            <div className="text-center p-4 bg-[#0A0B10] rounded-xl border border-[#1F2833] text-xs text-[#45A29E]">
              Tip: Click on any district boundary on the map above to view comprehensive skill gaps, curriculum deficits, and AI policy recommendations.
            </div>
          )}
        </section>

        {/* SECTION 2: DISTRICT-WISE SKILL GAP INTELLIGENCE */}
        <SkillGapIntelligence
          selectedDistrict={selectedDistrict}
          onSelectDistrict={(d) => {
            setSelectedDistrict(d);
            const mapEl = document.getElementById('maharashtra-map-container');
            if (mapEl) mapEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* SECTION 3: DISTRICT-WISE EMPLOYMENT OUTCOMES */}
        <EmploymentOutcomes
          selectedDistrict={selectedDistrict}
          onSelectDistrict={(d) => {
            setSelectedDistrict(d);
            const mapEl = document.getElementById('maharashtra-map-container');
            if (mapEl) mapEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* SECTION 4: SKILLING LIFECYCLE & LONGITUDINAL OUTCOMES FLOWCHART */}
        <OutcomeFlowchart />

        {/* SECTION 5: DPI-POWERED TRACKING & VERIFICATION HUB */}
        <TrackingVerificationHub />

        {/* SECTION 6: POLICY INTERVENTION SIMULATOR */}
        <PolicyInterventionSimulator />

      </main>

      {/* Inter-District Comparison Modal */}
      {comparisonModalOpen && (
        <DistrictComparisonModal
          districtA={compareDistrictA}
          districtB={compareDistrictB}
          onClose={() => setComparisonModalOpen(false)}
          onSelectDistrictB={(d) => setCompareDistrictB(d)}
        />
      )}

      {/* Official Footer */}
      <footer className="bg-[#0A0B10] text-slate-400 border-t border-[#1F2833] py-10 mt-16 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[#1F2833] pb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#66FCF1] flex items-center justify-center text-[#0B0C10] font-black text-base shadow-md">
                म
              </div>
              <div>
                <span className="text-white font-bold block text-sm">
                  Maharashtra State Skill Development Society (MSSDS)
                </span>
                <span className="text-[#45A29E] text-xs">
                  Government of Maharashtra • Smart India Hackathon 2026 Submission
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs">
              <span className="text-slate-400">Designed for Ministry of Skill Development &amp; Entrepreneurship (MSDE)</span>
              <span className="px-2.5 py-1 rounded bg-[#1F2833] text-[#66FCF1] border border-[#1F2833] font-mono text-[11px] font-bold">
                SIH 2026 PROTOTYPE
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>
              © 2026 MahaKaushalya Analytics Platform. Developed for SIH 2026: Difficulties in Tracking Employment Outcomes &amp; Skill Gaps.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <span>EPFO UAN API Interoperability</span>
              <span>•</span>
              <span>DigiLocker W3C Verifiable Credentials</span>
              <span>•</span>
              <span>35 District GeoJSON Geometry</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
