import React, { useState, useMemo } from 'react';
import { Sliders, Sparkles, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { MAHARASHTRA_SUMMARY_METRICS } from '../data/maharashtraData';

export const PolicyInterventionSimulator: React.FC = () => {
  const [ojtMandate, setOjtMandate] = useState<number>(30); // 0 to 90 days
  const [dpiAutomation, setDpiAutomation] = useState<number>(65); // 0 to 100%
  const [midcPartnership, setMidcPartnership] = useState<number>(50); // 0 to 100%
  const [retentionIncentive, setRetentionIncentive] = useState<number>(1000); // 0 to 3000 Rs

  // Simulation calculation
  const simulationResults = useMemo(() => {
    const baseEmp = MAHARASHTRA_SUMMARY_METRICS.averageEmploymentRate; // 67.5
    const baseRetention = MAHARASHTRA_SUMMARY_METRICS.average6MonthRetentionRate; // 69.4
    const baseTrackingLeakage = 32.5; // %

    // Impact coefficients
    const ojtEmpLift = (ojtMandate / 90) * 8.5;
    const midcEmpLift = (midcPartnership / 100) * 7.2;
    const ojtRetLift = (ojtMandate / 90) * 6.0;
    const retentionIncentiveLift = (retentionIncentive / 3000) * 8.5;

    const projectedEmp = Math.min(94, Math.round((baseEmp + ojtEmpLift + midcEmpLift) * 10) / 10);
    const projectedRetention = Math.min(92, Math.round((baseRetention + ojtRetLift + retentionIncentiveLift) * 10) / 10);

    const projectedLeakage = Math.max(3.2, Math.round((baseTrackingLeakage - (dpiAutomation / 100) * 27.5) * 10) / 10);
    const additionalPlacements = Math.round((projectedEmp - baseEmp) * 0.01 * MAHARASHTRA_SUMMARY_METRICS.totalCertified);

    return {
      projectedEmp,
      empDelta: Math.round((projectedEmp - baseEmp) * 10) / 10,
      projectedRetention,
      retDelta: Math.round((projectedRetention - baseRetention) * 10) / 10,
      projectedLeakage,
      leakageDelta: Math.round((baseTrackingLeakage - projectedLeakage) * 10) / 10,
      additionalPlacements
    };
  }, [ojtMandate, dpiAutomation, midcPartnership, retentionIncentive]);

  const handleReset = () => {
    setOjtMandate(30);
    setDpiAutomation(65);
    setMidcPartnership(50);
    setRetentionIncentive(1000);
  };

  return (
    <section 
      id="policy-intervention-simulator"
      className="bg-[#0A0B10] text-[#E0E0E0] rounded-2xl border border-[#1F2833] shadow-2xl p-6 my-8 space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1F2833] pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#1F2833] text-[#66FCF1] border border-[#1F2833] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#66FCF1]" />
              Interactive Policy Sandbox
            </span>
            <span className="px-2 py-0.5 rounded-full text-xs bg-[#1F2833] text-[#45A29E] border border-[#1F2833]">
              Government Decision Support
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
            Maharashtra Skilling Policy &amp; Impact Simulator
          </h2>
          <p className="text-sm text-[#45A29E] mt-0.5">
            Model the outcome shifts from curriculum modernization, on-the-job apprenticeship mandates, and DPI automated tracking.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="px-3 py-1.5 rounded-lg bg-[#1F2833] hover:bg-[#66FCF1] hover:text-[#0B0C10] text-slate-200 border border-[#1F2833] text-xs font-semibold flex items-center gap-1.5 transition-colors self-start md:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Parameters</span>
        </button>
      </div>

      {/* Main Grid: Controls on Left, Live Projections on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Sliders (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Slider 1 */}
          <div className="bg-[#0B0C10] border border-[#1F2833] p-4 rounded-xl space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-200">
                1. On-The-Job Apprenticeship (OJT) Mandate in Curriculum
              </span>
              <span className="font-mono font-bold text-[#66FCF1] text-sm">
                {ojtMandate} Days
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="90"
              step="15"
              value={ojtMandate}
              onChange={(e) => setOjtMandate(Number(e.target.value))}
              className="w-full h-2 bg-[#1F2833] rounded-lg appearance-none cursor-pointer accent-[#66FCF1]"
            />
            <p className="text-[11px] text-slate-400">
              Mandates hands-on industrial shop-floor training at accredited MIDC factories prior to final certification.
            </p>
          </div>

          {/* Slider 2 */}
          <div className="bg-[#0B0C10] border border-[#1F2833] p-4 rounded-xl space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-200">
                2. Automated DPI EPFO &amp; DigiLocker Tracking Adoption
              </span>
              <span className="font-mono font-bold text-emerald-400 text-sm">
                {dpiAutomation}%
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={dpiAutomation}
              onChange={(e) => setDpiAutomation(Number(e.target.value))}
              className="w-full h-2 bg-[#1F2833] rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
            <p className="text-[11px] text-slate-400">
              Replaces manual provider survey call sheets with automated EPFO electronic challan checks and Aadhaar DigiLocker sync.
            </p>
          </div>

          {/* Slider 3 */}
          <div className="bg-[#0B0C10] border border-[#1F2833] p-4 rounded-xl space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-200">
                3. Industry Cluster Co-Design (MIDC/Chambers of Commerce)
              </span>
              <span className="font-mono font-bold text-[#45A29E] text-sm">
                {midcPartnership}% Co-Design
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="10"
              value={midcPartnership}
              onChange={(e) => setMidcPartnership(Number(e.target.value))}
              className="w-full h-2 bg-[#1F2833] rounded-lg appearance-none cursor-pointer accent-[#45A29E]"
            />
            <p className="text-[11px] text-slate-400">
              Local District Skill Committees co-craft curriculum modules directly with automobile, IT, pharma, and textile clusters.
            </p>
          </div>

          {/* Slider 4 */}
          <div className="bg-[#0B0C10] border border-[#1F2833] p-4 rounded-xl space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-200">
                4. Post-Placement 6-Month Retention Support Stipend
              </span>
              <span className="font-mono font-bold text-[#66FCF1] text-sm">
                ₹{retentionIncentive}/month
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="3000"
              step="500"
              value={retentionIncentive}
              onChange={(e) => setRetentionIncentive(Number(e.target.value))}
              className="w-full h-2 bg-[#1F2833] rounded-lg appearance-none cursor-pointer accent-[#66FCF1]"
            />
            <p className="text-[11px] text-slate-400">
              Direct Benefit Transfer (DBT) relocation/housing stipend paid to trainees who maintain continuous EPFO status for 180 days.
            </p>
          </div>
        </div>

        {/* Live Projections Output (5 Cols) */}
        <div className="lg:col-span-5 bg-[#0B0C10] border border-[#1F2833] rounded-xl p-5 space-y-4 shadow-xl">
          <div className="border-b border-[#1F2833] pb-3">
            <span className="text-[10px] font-bold text-[#66FCF1] uppercase tracking-wider block">
              Real-Time Simulated Impact
            </span>
            <h3 className="text-lg font-bold text-white mt-0.5">
              Projected State Outcomes
            </h3>
          </div>

          <div className="space-y-3">
            {/* Projected Metric 1 */}
            <div className="bg-[#050608] p-3.5 rounded-xl border border-[#1F2833]">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-300 font-medium">Statewide Employment Rate</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                  +{simulationResults.empDelta}% Lift
                </span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-extrabold text-white">
                  {simulationResults.projectedEmp}%
                </span>
                <span className="text-xs text-slate-400">
                  from baseline {MAHARASHTRA_SUMMARY_METRICS.averageEmploymentRate}%
                </span>
              </div>
            </div>

            {/* Projected Metric 2 */}
            <div className="bg-[#050608] p-3.5 rounded-xl border border-[#1F2833]">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-300 font-medium">6-Month Retention Rate</span>
                <span className="text-xs font-bold text-[#45A29E] bg-[#1F2833] px-2 py-0.5 rounded border border-[#1F2833]">
                  +{simulationResults.retDelta}% Lift
                </span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-extrabold text-white">
                  {simulationResults.projectedRetention}%
                </span>
                <span className="text-xs text-slate-400">
                  from baseline {MAHARASHTRA_SUMMARY_METRICS.average6MonthRetentionRate}%
                </span>
              </div>
            </div>

            {/* Projected Metric 3 */}
            <div className="bg-[#050608] p-3.5 rounded-xl border border-[#1F2833]">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-300 font-medium">Tracking Leakage (Lost Candidates)</span>
                <span className="text-xs font-bold text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-800/60">
                  -{simulationResults.leakageDelta}% Drop
                </span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-extrabold text-red-400">
                  {simulationResults.projectedLeakage}%
                </span>
                <span className="text-xs text-slate-400">
                  down from 32.5% unverified
                </span>
              </div>
            </div>

            {/* Net Gain */}
            <div className="bg-[#050608] p-3.5 rounded-xl border border-[#66FCF1]/30">
              <span className="text-xs text-slate-300 block">Est. Additional Formally Employed Youths:</span>
              <span className="text-xl font-extrabold text-[#66FCF1] block mt-0.5">
                +{simulationResults.additionalPlacements.toLocaleString('en-IN')} Candidates
              </span>
              <span className="text-[11px] text-[#45A29E] block mt-1">
                Achieved without increasing total intake, purely by bridging skill gaps &amp; plugging tracking leaks!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
