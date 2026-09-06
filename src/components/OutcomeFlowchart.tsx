import React, { useState } from 'react';
import { 
  GitFork, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Briefcase, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Building2, 
  GraduationCap, 
  HelpCircle, 
  FileCheck2,
  ChevronDown,
  Layers
} from 'lucide-react';
import { SKILLING_LIFECYCLE_NODES } from '../data/maharashtraData';
import { OutcomeStageNode } from '../types';

export const OutcomeFlowchart: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<OutcomeStageNode>(SKILLING_LIFECYCLE_NODES[0]);
  const [activeStageTab, setActiveStageTab] = useState<number | 'all'>('all');

  const nodesByStage = {
    1: SKILLING_LIFECYCLE_NODES.filter(n => n.stageNumber === 1 || n.stageNumber === 2),
    2: SKILLING_LIFECYCLE_NODES.filter(n => n.stageNumber === 3),
    3: SKILLING_LIFECYCLE_NODES.filter(n => n.stageNumber === 4),
    4: SKILLING_LIFECYCLE_NODES.filter(n => n.stageNumber === 5),
    5: SKILLING_LIFECYCLE_NODES.filter(n => n.stageNumber >= 6),
  };

  const getNodeColor = (category: OutcomeStageNode['category']) => {
    switch (category) {
      case 'input':
        return 'border-[#1F2833] bg-[#050608] text-slate-200 hover:border-[#66FCF1]/50';
      case 'training':
        return 'border-[#1F2833] bg-[#050608] text-slate-200 hover:border-[#66FCF1]/50';
      case 'assessment':
        return 'border-[#1F2833] bg-[#050608] text-slate-200 hover:border-[#66FCF1]/50';
      case 'placement':
        return 'border-[#1F2833] bg-[#050608] text-emerald-300 hover:border-emerald-500';
      case 'retention':
        return 'border-[#1F2833] bg-[#050608] text-[#45A29E] hover:border-[#66FCF1]';
      case 'leakage':
        return 'border-[#1F2833] bg-[#050608] text-red-300 hover:border-red-500';
    }
  };

  const getCategoryBadge = (category: OutcomeStageNode['category']) => {
    switch (category) {
      case 'placement':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">Verified Placement</span>;
      case 'retention':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#1F2833] text-[#45A29E] border border-[#1F2833]">Longitudinal Milestone</span>;
      case 'leakage':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-950/60 text-red-400 border border-red-800/60">Tracking Leakage / Risk</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#1F2833] text-slate-300 border border-[#1F2833]">{category.toUpperCase()}</span>;
    }
  };

  return (
    <section 
      id="skilling-outcomes-flowchart-section"
      className="bg-[#0A0B10] rounded-2xl border border-[#1F2833] shadow-2xl p-6 my-8 space-y-6 text-[#E0E0E0]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1F2833] pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#1F2833] text-[#66FCF1] border border-[#1F2833] flex items-center gap-1">
              <GitFork className="w-3.5 h-3.5 text-[#66FCF1]" />
              SIH 2026 Core Workflow Architecture
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#1F2833] text-[#45A29E] border border-[#1F2833]">
              All Possible Skilling Outcomes (End-to-End)
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
            Skilling Lifecycle &amp; Longitudinal Outcomes Flowchart
          </h2>
          <p className="text-sm text-[#45A29E] mt-0.5">
            Interactive pipeline tracking every stage: Mobilization → Training Dropout → Assessment Failure → Certified ≠ Employed Disconnect → Longitudinal Retention Milestones.
          </p>
        </div>

        {/* Stage Tabs */}
        <div className="flex items-center gap-1 bg-[#0B0C10] p-1 rounded-xl border border-[#1F2833] text-xs">
          <button
            onClick={() => setActiveStageTab('all')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeStageTab === 'all' ? 'bg-[#66FCF1] text-[#0B0C10] shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            All Stages
          </button>
          <button
            onClick={() => setActiveStageTab(4)}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeStageTab === 4 ? 'bg-[#66FCF1] text-[#0B0C10] shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Post-Cert Outcomes
          </button>
          <button
            onClick={() => setActiveStageTab(5)}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeStageTab === 5 ? 'bg-[#66FCF1] text-[#0B0C10] shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Retention (3/6/12 Mo)
          </button>
        </div>
      </div>

      {/* Main Flow Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left 8 Cols: Interactive Visual Pipeline Stages */}
        <div className="lg:col-span-8 space-y-6">
          {/* Stage 1 & 2: Mobilization & Training */}
          {(activeStageTab === 'all' || activeStageTab === 1) && (
            <div className="bg-[#0B0C10] p-4 rounded-xl border border-[#1F2833]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#1F2833] text-[#66FCF1] flex items-center justify-center text-xs font-bold border border-[#66FCF1]/30">1</span>
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Mobilization, Enrollment &amp; Training Execution
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {nodesByStage[1].map((node) => (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`p-3 rounded-xl border text-left transition-all ${getNodeColor(node.category)} ${
                      selectedNode.id === node.id ? 'ring-2 ring-[#66FCF1] shadow-lg' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      {getCategoryBadge(node.category)}
                      <span className="text-xs font-bold text-[#66FCF1]">{node.percentageOfEnrolled}%</span>
                    </div>
                    <span className="font-bold text-xs block leading-snug text-white">{node.title}</span>
                    <span className="text-xs font-extrabold block mt-1 text-slate-300">
                      {node.count.toLocaleString('en-IN')} Candidates
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Stage 3: Assessment & Certification */}
          {(activeStageTab === 'all' || activeStageTab === 2) && (
            <div className="bg-[#0B0C10] p-4 rounded-xl border border-[#1F2833]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#1F2833] text-[#45A29E] flex items-center justify-center text-xs font-bold border border-[#45A29E]/30">2</span>
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Assessment &amp; Certification Gate
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {nodesByStage[2].map((node) => (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`p-3 rounded-xl border text-left transition-all ${getNodeColor(node.category)} ${
                      selectedNode.id === node.id ? 'ring-2 ring-[#66FCF1] shadow-lg' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      {getCategoryBadge(node.category)}
                      <span className="text-xs font-bold text-[#66FCF1]">{node.percentageOfEnrolled}%</span>
                    </div>
                    <span className="font-bold text-xs block leading-snug text-white">{node.title}</span>
                    <span className="text-xs font-extrabold block mt-1 text-slate-300">
                      {node.count.toLocaleString('en-IN')} Candidates
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Stage 4: Post-Certification Outcomes (Certified != Employed) */}
          {(activeStageTab === 'all' || activeStageTab === 4) && (
            <div className="bg-[#0B0C10] p-4 rounded-xl border border-[#1F2833]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#1F2833] text-emerald-400 flex items-center justify-center text-xs font-bold border border-emerald-500/30">3</span>
                  <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Post-Certification Outcome Branching (All Possible Pathways)
                  </h3>
                </div>
                <span className="text-[11px] font-bold text-red-400 bg-red-950/40 px-2 py-0.5 rounded border border-red-900/50">
                  Certified ≠ Employed
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {/* Formal Wage */}
                <button
                  onClick={() => setSelectedNode(SKILLING_LIFECYCLE_NODES.find(n => n.id === 'node-formal-wage')!)}
                  className={`p-3 rounded-xl border text-left transition-all ${getNodeColor('placement')} ${
                    selectedNode.id === 'node-formal-wage' ? 'ring-2 ring-[#66FCF1] shadow-lg' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">Formal Wage</span>
                    <span className="text-xs font-bold text-emerald-400">51.6%</span>
                  </div>
                  <span className="font-bold text-xs block text-white">EPFO Verified Payroll</span>
                  <span className="text-xs font-extrabold text-emerald-300 block mt-1">345,000 Trainees</span>
                </button>

                {/* Apprenticeship */}
                <button
                  onClick={() => setSelectedNode(SKILLING_LIFECYCLE_NODES.find(n => n.id === 'node-apprenticeship')!)}
                  className={`p-3 rounded-xl border text-left transition-all ${getNodeColor('placement')} ${
                    selectedNode.id === 'node-apprenticeship' ? 'ring-2 ring-[#66FCF1] shadow-lg' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">Apprentice</span>
                    <span className="text-xs font-bold text-emerald-400">6.3%</span>
                  </div>
                  <span className="font-bold text-xs block text-white">NAPS / NATS Contract</span>
                  <span className="text-xs font-extrabold text-emerald-300 block mt-1">42,000 Trainees</span>
                </button>

                {/* Self-Employed */}
                <button
                  onClick={() => setSelectedNode(SKILLING_LIFECYCLE_NODES.find(n => n.id === 'node-self-employed')!)}
                  className={`p-3 rounded-xl border text-left transition-all ${getNodeColor('placement')} ${
                    selectedNode.id === 'node-self-employed' ? 'ring-2 ring-[#66FCF1] shadow-lg' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#1F2833] text-[#66FCF1] border border-[#1F2833]">Entrepreneur</span>
                    <span className="text-xs font-bold text-[#66FCF1]">11.0%</span>
                  </div>
                  <span className="font-bold text-xs block text-white">Udyam / Mudra Trade</span>
                  <span className="text-xs font-extrabold text-[#66FCF1] block mt-1">73,500 Trainees</span>
                </button>

                {/* Higher Education */}
                <button
                  onClick={() => setSelectedNode(SKILLING_LIFECYCLE_NODES.find(n => n.id === 'node-further-education')!)}
                  className={`p-3 rounded-xl border text-left transition-all ${getNodeColor('placement')} ${
                    selectedNode.id === 'node-further-education' ? 'ring-2 ring-[#66FCF1] shadow-lg' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#1F2833] text-[#45A29E] border border-[#1F2833]">Education</span>
                    <span className="text-xs font-bold text-[#45A29E]">1.9%</span>
                  </div>
                  <span className="font-bold text-xs block text-white">Polytechnic / College</span>
                  <span className="text-xs font-extrabold text-[#45A29E] block mt-1">12,400 Trainees</span>
                </button>

                {/* Seeking Job */}
                <button
                  onClick={() => setSelectedNode(SKILLING_LIFECYCLE_NODES.find(n => n.id === 'node-unplaced-seeking')!)}
                  className={`p-3 rounded-xl border text-left transition-all ${getNodeColor('leakage')} ${
                    selectedNode.id === 'node-unplaced-seeking' ? 'ring-2 ring-[#66FCF1] shadow-lg' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-950/60 text-amber-400 border border-amber-800/60">Job Seeking</span>
                    <span className="text-xs font-bold text-amber-400">7.3%</span>
                  </div>
                  <span className="font-bold text-xs block text-white">Unplaced Candidate</span>
                  <span className="text-xs font-extrabold text-amber-300 block mt-1">48,600 Trainees</span>
                </button>

                {/* Inactive */}
                <button
                  onClick={() => setSelectedNode(SKILLING_LIFECYCLE_NODES.find(n => n.id === 'node-inactive-workforce')!)}
                  className={`p-3 rounded-xl border text-left transition-all ${getNodeColor('leakage')} ${
                    selectedNode.id === 'node-inactive-workforce' ? 'ring-2 ring-[#66FCF1] shadow-lg' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-950/60 text-red-400 border border-red-800/60">Opted Out</span>
                    <span className="text-xs font-bold text-red-400">2.2%</span>
                  </div>
                  <span className="font-bold text-xs block text-white">Inactive in Workforce</span>
                  <span className="text-xs font-extrabold text-red-300 block mt-1">14,500 Trainees</span>
                </button>

                {/* Untraceable (The Core Hackathon Problem Statement) */}
                <button
                  onClick={() => setSelectedNode(SKILLING_LIFECYCLE_NODES.find(n => n.id === 'node-untraceable')!)}
                  className={`p-3 rounded-xl border text-left transition-all col-span-1 sm:col-span-2 ${getNodeColor('leakage')} ${
                    selectedNode.id === 'node-untraceable' ? 'ring-2 ring-[#66FCF1] shadow-lg' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-600 text-white">THE CORE PROBLEM STATEMENT</span>
                    <span className="text-xs font-bold text-red-400">2.7%</span>
                  </div>
                  <span className="font-bold text-xs block text-red-300">Untraceable / Contact Lost (Tracking Leakage)</span>
                  <span className="text-xs font-extrabold text-red-400 block mt-0.5">18,000 Unverified Candidates</span>
                </button>
              </div>
            </div>
          )}

          {/* Stage 5: Longitudinal Retention Milestones */}
          {(activeStageTab === 'all' || activeStageTab === 5) && (
            <div className="bg-[#0B0C10] p-4 rounded-xl border border-[#1F2833]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#1F2833] text-[#45A29E] flex items-center justify-center text-xs font-bold border border-[#45A29E]/30">4</span>
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Longitudinal Retention Milestones &amp; Post-Placement Attrition
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
                {nodesByStage[5].map((node) => (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`p-3 rounded-xl border text-left transition-all ${getNodeColor(node.category)} ${
                      selectedNode.id === node.id ? 'ring-2 ring-[#66FCF1] shadow-lg' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      {getCategoryBadge(node.category)}
                      <span className="text-xs font-bold text-[#66FCF1]">{node.percentageOfEnrolled}%</span>
                    </div>
                    <span className="font-bold text-xs block leading-snug text-white">{node.title}</span>
                    <span className="text-xs font-extrabold block mt-1 text-[#45A29E]">
                      {node.count.toLocaleString('en-IN')} Trainees
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right 4 Cols: Active Node Detail Inspector */}
        <div className="lg:col-span-4 bg-[#0B0C10] border border-[#1F2833] rounded-xl p-5 shadow-2xl space-y-4 sticky top-6">
          <div className="flex items-center justify-between border-b border-[#1F2833] pb-3">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Stage {selectedNode.stageNumber} Inspector
              </span>
              <h4 className="text-base font-bold text-white leading-tight mt-0.5">
                {selectedNode.title}
              </h4>
            </div>
            {getCategoryBadge(selectedNode.category)}
          </div>

          {/* Counts & Percentage */}
          <div className="grid grid-cols-2 gap-2 bg-[#050608] p-3 rounded-xl border border-[#1F2833] text-xs">
            <div>
              <span className="text-slate-400 block">Candidate Count</span>
              <span className="text-lg font-extrabold text-white block mt-0.5">
                {selectedNode.count.toLocaleString('en-IN')}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block">% of Total Enrolled</span>
              <span className="text-lg font-extrabold text-[#66FCF1] block mt-0.5">
                {selectedNode.percentageOfEnrolled}%
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <span className="text-xs font-bold text-slate-300 block mb-1">Process Definition</span>
            <p className="text-xs text-slate-300 leading-relaxed bg-[#050608] p-2.5 rounded-lg border border-[#1F2833]">
              {selectedNode.description}
            </p>
          </div>

          {/* Tracking Mechanism (Direct answer to problem statement) */}
          <div className="bg-[#050608] p-3 rounded-xl border border-emerald-500/30 text-xs">
            <span className="font-bold text-emerald-400 flex items-center gap-1.5 mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              DPI Tracking &amp; Verification Mechanism
            </span>
            <p className="text-emerald-300 font-medium">
              {selectedNode.trackingMechanism}
            </p>
          </div>

          {/* Risk Factors & Mitigation */}
          {selectedNode.riskFactor && (
            <div className="bg-[#050608] p-3 rounded-xl border border-red-900/50 text-xs">
              <span className="font-bold text-red-400 flex items-center gap-1.5 mb-1">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Vulnerability / Drop-off Root Cause
              </span>
              <p className="text-red-300">
                {selectedNode.riskFactor}
              </p>
            </div>
          )}

          <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-[#1F2833]">
            <span>State-wide verification status: Live</span>
            <span className="font-semibold text-[#66FCF1]">SIH 2026 Audit Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
};
