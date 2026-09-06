import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Smartphone, 
  Building2, 
  FileCheck, 
  RefreshCw, 
  Lock, 
  ExternalLink,
  Bot,
  Database
} from 'lucide-react';
import { SAMPLE_VERIFICATION_CANDIDATES } from '../data/maharashtraData';
import { VerificationCandidate } from '../types';

export const TrackingVerificationHub: React.FC = () => {
  const [candidates, setCandidates] = useState<VerificationCandidate[]>(SAMPLE_VERIFICATION_CANDIDATES);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Verified' | 'Pending' | 'Flagged'>('All');
  const [activeCandidate, setActiveCandidate] = useState<VerificationCandidate>(SAMPLE_VERIFICATION_CANDIDATES[0]);
  const [isVerifying, setIsVerifying] = useState(false);

  // Helper to categorize candidate employment/verification state
  const getCandidateStatusCategory = (c: VerificationCandidate): 'Verified' | 'Pending' | 'Flagged' => {
    if (c.employmentStatus === 'EPFO Verified' || c.employmentStatus === 'Apprentice (NAPS)' || c.employmentStatus === 'Self-Employed (Udyam)') {
      return 'Verified';
    }
    if (c.employmentStatus === 'Underemployed') {
      return 'Pending';
    }
    return 'Flagged';
  };

  const filteredCandidates = candidates.filter((c) => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      (c.name && c.name.toLowerCase().includes(query)) ||
      (c.district && c.district.toLowerCase().includes(query)) ||
      (c.courseName && c.courseName.toLowerCase().includes(query)) ||
      (c.uanNumber && c.uanNumber.includes(query)) ||
      (c.employerName && c.employerName.toLowerCase().includes(query));

    const statusCategory = getCandidateStatusCategory(c);
    const matchesStatus = statusFilter === 'All' || statusCategory === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleTriggerVerification = (id: string) => {
    setIsVerifying(true);
    setTimeout(() => {
      setCandidates(prev => prev.map(c => {
        if (c.id === id) {
          const updated: VerificationCandidate = {
            ...c,
            employmentStatus: 'EPFO Verified',
            uanNumber: c.uanNumber || `101${Math.floor(100000000 + Math.random() * 900000000)}`,
            employerName: c.employerName || 'Mahindra & Mahindra Ltd, Pune',
            monthlySalary: c.monthlySalary || 21500,
            retentionMonths: Math.max(c.retentionMonths, 6),
            lastVerificationDate: '2026-03-06 (Just Now via EPFO API)',
            verificationSource: 'EPFO UAN'
          };
          if (activeCandidate?.id === id) {
            setActiveCandidate(updated);
          }
          return updated;
        }
        return c;
      }));
      setIsVerifying(false);
    }, 900);
  };

  return (
    <section 
      id="tracking-verification-hub"
      className="bg-[#0A0B10] rounded-2xl border border-[#1F2833] shadow-2xl p-6 my-8 space-y-6 text-[#E0E0E0]"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#1F2833] pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#1F2833] text-[#66FCF1] border border-[#1F2833] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#66FCF1]" />
              Digital Public Infrastructure (DPI)
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#1F2833] text-amber-400 border border-amber-900/60">
              Direct Solution to Tracking Difficulties
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
            DPI-Powered Employment Tracking &amp; Verification Hub
          </h2>
          <p className="text-sm text-[#45A29E] mt-0.5">
            Eliminating tracking leakage and phantom placements using EPFO UAN cross-referencing, DigiLocker credentials, and automated conversational AI bots.
          </p>
        </div>

        {/* Live Tracking Architecture Pillars */}
        <div className="flex items-center gap-2 text-xs">
          <div className="bg-[#0B0C10] border border-[#1F2833] px-3 py-1.5 rounded-lg text-slate-300 font-semibold flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-[#66FCF1]" />
            <span>EPFO Direct API</span>
          </div>
          <div className="bg-[#0B0C10] border border-[#1F2833] px-3 py-1.5 rounded-lg text-slate-300 font-semibold flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#45A29E]" />
            <span>DigiLocker W3C VC</span>
          </div>
          <div className="bg-[#0B0C10] border border-[#1F2833] px-3 py-1.5 rounded-lg text-slate-300 font-semibold flex items-center gap-1.5">
            <Bot className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp AI Bot</span>
          </div>
        </div>
      </div>

      {/* Why Tracking Fails vs How We Solve It Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="bg-[#0B0C10] p-4 rounded-xl border border-red-900/40 text-red-300 space-y-2">
          <span className="font-bold flex items-center gap-1.5 text-red-400 text-sm">
            <XCircle className="w-4 h-4 text-red-500" />
            Why Traditional Post-Skilling Tracking Fails
          </span>
          <ul className="space-y-1 text-slate-300 list-disc list-inside">
            <li><strong className="text-white">SIM Invalidation:</strong> 42% of rural trainees change phone numbers within 6 months.</li>
            <li><strong className="text-white">Manual Call Fatigue:</strong> District officers struggle with cold calls and fake reported numbers.</li>
            <li><strong className="text-white">Unverified Contractor Handoff:</strong> Training providers upload forged salary slips for payouts.</li>
            <li><strong className="text-white">Informal / Cash Sector:</strong> No paper trail for domestic repair or self-employed trades.</li>
          </ul>
        </div>

        <div className="bg-[#0B0C10] p-4 rounded-xl border border-emerald-900/40 text-emerald-300 space-y-2">
          <span className="font-bold flex items-center gap-1.5 text-emerald-400 text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Our Multi-Tier Automated Verification Architecture
          </span>
          <ul className="space-y-1 text-slate-300 list-disc list-inside">
            <li><strong className="text-white">EPFO UAN Ping:</strong> Automated API handshake confirms monthly employer pension contributions.</li>
            <li><strong className="text-white">DigiLocker Integration:</strong> Verifiable Credentials issued directly to candidate Aadhaar vault.</li>
            <li><strong className="text-white">Conversational WhatsApp AI (Marathi/Hindi):</strong> Automated 30/90/180-day pulse check with geo-tag.</li>
            <li><strong className="text-white">Udyam Aadhaar Check:</strong> Validates GST/MSME registration for self-employed trainees.</li>
          </ul>
        </div>
      </div>

      {/* Interactive Candidate Verification Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Candidate List (7 Cols) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#0B0C10] p-2.5 rounded-xl border border-[#1F2833]">
            <div className="relative flex-1">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search candidate name, UAN, or district..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-[#1F2833] bg-[#050608] text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-[#66FCF1]"
              />
            </div>

            <div className="flex items-center gap-1 text-xs">
              {(['All', 'Verified', 'Pending', 'Flagged'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                    statusFilter === st 
                      ? 'bg-[#66FCF1] text-[#0B0C10] font-bold shadow-md' 
                      : 'bg-[#050608] text-slate-400 border border-[#1F2833] hover:text-white'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
            {filteredCandidates.map((c) => {
              const isSelected = activeCandidate.id === c.id;

              return (
                <div
                  key={c.id}
                  onClick={() => setActiveCandidate(c)}
                  className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                    isSelected 
                      ? 'border-[#66FCF1] bg-[#1F2833]/50 shadow-md ring-1 ring-[#66FCF1]/30' 
                      : 'border-[#1F2833] bg-[#0B0C10] hover:border-[#66FCF1]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white text-sm block">{c.name}</span>
                      <span className="text-slate-400 text-[11px]">
                        {c.district} District • {c.courseName}
                      </span>
                    </div>

                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      getCandidateStatusCategory(c) === 'Verified'
                        ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/60'
                        : getCandidateStatusCategory(c) === 'Pending'
                        ? 'bg-amber-950/60 text-amber-400 border border-amber-800/60'
                        : 'bg-red-950/60 text-red-400 border border-red-800/60'
                    }`}>
                      {c.employmentStatus}
                    </span>
                  </div>

                  <div className="mt-2 pt-2 border-t border-[#1F2833] grid grid-cols-3 gap-1 text-[11px] text-slate-400">
                    <span className="truncate">Employer: <strong className="text-white">{c.employerName || 'Pending / Self'}</strong></span>
                    <span>Salary: <strong className="text-emerald-400">{c.monthlySalary != null ? `₹${c.monthlySalary.toLocaleString('en-IN')}` : 'Unplaced / N/A'}</strong></span>
                    <span>Source: <strong className="text-slate-300">{c.verificationSource}</strong></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Candidate Audit Card (5 Cols) */}
        <div className="lg:col-span-5 bg-[#0B0C10] border border-[#1F2833] rounded-xl p-5 text-xs space-y-4 shadow-xl">
          <div className="flex items-start justify-between border-b border-[#1F2833] pb-3">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Candidate DPI Ledger Record
              </span>
              <h3 className="text-base font-bold text-white mt-0.5">
                {activeCandidate.name}
              </h3>
              <p className="text-[11px] text-slate-400">
                Aadhaar Token: <span className="font-mono text-[#66FCF1]">{activeCandidate.aadhaarMasked}</span>
              </p>
            </div>

            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
              getCandidateStatusCategory(activeCandidate) === 'Verified'
                ? 'bg-emerald-950/70 text-emerald-400 border border-emerald-800/60'
                : getCandidateStatusCategory(activeCandidate) === 'Pending'
                ? 'bg-amber-950/70 text-amber-400 border border-amber-800/60'
                : 'bg-red-950/70 text-red-400 border border-red-800/60'
            }`}>
              {activeCandidate.employmentStatus}
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between py-1 border-b border-[#1F2833]">
              <span className="text-slate-400">Training District:</span>
              <span className="font-semibold text-white">{activeCandidate.district}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#1F2833]">
              <span className="text-slate-400">Certified Course:</span>
              <span className="font-semibold text-white">{activeCandidate.courseName}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#1F2833]">
              <span className="text-slate-400">Employer Organization:</span>
              <span className="font-semibold text-white">{activeCandidate.employerName || 'Self-Employed / Unallocated'}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#1F2833]">
              <span className="text-slate-400">Universal Account No (UAN):</span>
              <span className="font-mono font-bold text-[#66FCF1]">{activeCandidate.uanNumber || 'Not Linked to UAN'}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#1F2833]">
              <span className="text-slate-400">Verified Monthly Salary:</span>
              <span className="font-bold text-emerald-400">
                {activeCandidate.monthlySalary != null ? `₹${activeCandidate.monthlySalary.toLocaleString('en-IN')}` : 'N/A (Unplaced / Self-employed)'}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#1F2833]">
              <span className="text-slate-400">EPFO Electronic Challan Return:</span>
              <span className={`font-bold ${activeCandidate.employmentStatus === 'EPFO Verified' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {activeCandidate.employmentStatus === 'EPFO Verified' ? 'ACTIVE (Contributions Verified)' : 'INACTIVE / NO CHALLAN'}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#1F2833]">
              <span className="text-slate-400">DigiLocker Certificate:</span>
              <span className={`font-bold ${activeCandidate.verificationSource === 'DigiLocker' || activeCandidate.employmentStatus === 'EPFO Verified' ? 'text-[#66FCF1]' : 'text-slate-500'}`}>
                {activeCandidate.verificationSource === 'DigiLocker' || activeCandidate.employmentStatus === 'EPFO Verified' ? 'SYNCED (SHA-256 Verified)' : 'PENDING SYNC'}
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400">Last Audit Check:</span>
              <span className="text-slate-300">{activeCandidate.lastVerificationDate}</span>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="pt-2">
            <button
              onClick={() => handleTriggerVerification(activeCandidate.id)}
              disabled={isVerifying || activeCandidate.employmentStatus === 'EPFO Verified'}
              className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                activeCandidate.employmentStatus === 'EPFO Verified'
                  ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60 cursor-default'
                  : 'bg-[#1F2833] hover:bg-[#66FCF1] hover:text-[#0B0C10] text-white border border-[#1F2833] shadow-lg'
              }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isVerifying ? 'animate-spin' : ''}`} />
              <span>
                {activeCandidate.employmentStatus === 'EPFO Verified'
                  ? 'Candidate 100% Verified in State Ledger'
                  : isVerifying
                  ? 'Pinging EPFO & DigiLocker Gateways...'
                  : 'Trigger DPI Real-Time Verification'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
