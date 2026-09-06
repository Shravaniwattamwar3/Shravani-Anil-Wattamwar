import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  AlertTriangle, 
  TrendingUp, 
  GitFork, 
  ShieldCheck, 
  Sliders, 
  Menu, 
  X,
  ExternalLink,
  Award
} from 'lucide-react';
import { MAHARASHTRA_SUMMARY_METRICS } from '../data/maharashtraData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'maharashtra-map-container', label: 'Maharashtra Map', icon: MapPin },
    { id: 'district-wise-skill-gap-intelligence', label: 'Skill Gap Intelligence', icon: AlertTriangle },
    { id: 'district-wise-employment-outcomes', label: 'Employment Outcomes', icon: TrendingUp },
    { id: 'skilling-outcomes-flowchart-section', label: 'Outcome Flowchart', icon: GitFork },
    { id: 'tracking-verification-hub', label: 'DPI Verification Hub', icon: ShieldCheck },
    { id: 'policy-intervention-simulator', label: 'Policy Simulator', icon: Sliders },
  ];

  const handleScrollTo = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0A0B10]/95 backdrop-blur-md border-b border-[#1F2833] text-[#E0E0E0]">
      {/* Topmost Official Accent Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-[#45A29E] via-[#66FCF1] to-[#45A29E]" />

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Portal Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#66FCF1] flex items-center justify-center text-[#0B0C10] font-black text-xl shadow-lg border border-[#66FCF1]/40">
              म
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-[#66FCF1] tracking-wider uppercase">
                  महाराष्ट्र शासन • Skill Development Dept.
                </span>
                <span className="hidden sm:inline-block px-2 py-0.2 rounded text-[10px] font-bold bg-[#1F2833] text-[#66FCF1] border border-[#1F2833]">
                  SIH 2026 Prototype
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-tight">
                MahaKaushalya Outcome &amp; Skill Gap Analytics
              </h1>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 text-xs">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
                    isActive
                      ? 'bg-[#1F2833] text-[#66FCF1] shadow-md border border-[#1F2833]'
                      : 'text-slate-300 hover:text-white hover:bg-[#1F2833]/40'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#66FCF1]' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action / Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-2 bg-[#0B0C10] px-3 py-1.5 rounded-lg border border-[#1F2833] text-xs">
              <span className="w-2 h-2 rounded-full bg-[#66FCF1] animate-pulse" />
              <span className="text-slate-400 font-medium">EPFO API:</span>
              <span className="text-[#66FCF1] font-bold">Synchronized</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-[#1F2833] text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A0B10] border-b border-[#1F2833] px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-[#66FCF1] hover:bg-[#1F2833] text-left"
              >
                <Icon className="w-4 h-4 text-[#66FCF1]" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Ticker Bar: High Level State Summary */}
      <div className="bg-[#050608] border-t border-[#1F2833] py-1.5 px-4 text-[11px] text-slate-400 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 whitespace-nowrap">
          <div className="flex items-center gap-6">
            <span>
              Total Districts: <strong className="text-white">36 Districts</strong>
            </span>
            <span>•</span>
            <span>
              Certified Trainees: <strong className="text-[#66FCF1]">{MAHARASHTRA_SUMMARY_METRICS.totalCertified.toLocaleString('en-IN')}</strong>
            </span>
            <span>•</span>
            <span>
              Employed Trainees: <strong className="text-emerald-400">{MAHARASHTRA_SUMMARY_METRICS.totalEmployed.toLocaleString('en-IN')}</strong> ({MAHARASHTRA_SUMMARY_METRICS.averageEmploymentRate}%)
            </span>
            <span>•</span>
            <span>
              Self-Employed: <strong className="text-teal-300">{MAHARASHTRA_SUMMARY_METRICS.totalSelfEmployed.toLocaleString('en-IN')}</strong> ({MAHARASHTRA_SUMMARY_METRICS.averageSelfEmploymentRate}%)
            </span>
            <span>•</span>
            <span>
              6-Month Retention: <strong className="text-[#45A29E]">{MAHARASHTRA_SUMMARY_METRICS.average6MonthRetentionRate}%</strong>
            </span>
          </div>

          <div className="text-[#66FCF1] font-medium text-[11px] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#66FCF1]"></span>
            Certified ≠ Employed Analysis Active
          </div>
        </div>
      </div>
    </header>
  );
};
