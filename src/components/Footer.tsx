import { MessageSquare, ShieldAlert, Compass } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: 'home' | 'portfolio' | 'insights' | 'about_contact') => void;
  openInquiryModal: () => void;
}

export default function Footer({ onNavigate, openInquiryModal }: FooterProps) {
  return (
    <footer className="bg-[#0A0E17] text-slate-400 font-sans py-12 md:py-16 border-t border-slate-900/60 pb-20 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        
        {/* Brand column */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="flex items-center justify-center p-2 rounded bg-red-650 text-white font-sans font-black text-sm">
              FS
            </div>
            <strong className="text-white text-lg font-bold tracking-tight">
              Food-Grade <span className="font-light text-slate-300">Specialist</span>
            </strong>
          </div>
          
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            High-integrity guidance by Preston Soon for food factory zoning, industrial power supply, and SFA-compliant layout setups across Singapore.
          </p>

          <div className="text-xs font-mono text-[#fc820c] font-bold flex items-center gap-1">
            <span>●</span>
            <span>BNI INDUSTRIAL SECTOR REPRESENTATIVE</span>
          </div>
        </div>

        {/* Quick navigators */}
        <div className="md:col-span-3 space-y-4">
          <strong className="text-slate-200 text-xs font-bold uppercase tracking-widest block">Core Directories</strong>
          <div className="flex flex-col gap-2.5 text-sm">
            <button 
              onClick={() => onNavigate('portfolio')}
              className="text-left hover:text-white transition-colors cursor-pointer"
            >
              Property Portfolio
            </button>
            <button 
              onClick={() => onNavigate('insights')}
              className="text-left hover:text-white transition-colors cursor-pointer"
            >
              Compliance Insights
            </button>
            <button 
              onClick={() => onNavigate('about_contact')}
              className="text-left hover:text-white transition-colors cursor-pointer"
            >
              Consultant Profile & Planning Form
            </button>
            <button 
              onClick={openInquiryModal}
              className="text-left text-red-650 font-bold hover:text-red-700 transition-colors cursor-pointer"
            >
              Send Inquiry
            </button>
          </div>
        </div>

        {/* Advisory small print */}
        <div className="md:col-span-4 space-y-4">
          <strong className="text-slate-200 text-xs font-bold uppercase tracking-widest block">Licensing Notice</strong>
          <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl space-y-3">
            <div className="flex items-start gap-2.5 text-xs text-slate-400 leading-snug">
              <ShieldAlert className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <p>
                All structural benchmarks, floor loading limits, mechanical ventilation specs, and electricity allocations must be independently verified. All transactions are overseen according to CEA Singapore industrial guidelines.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Under line */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 pt-8 mt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs select-none">
        <p>© 2026 Food-Grade Specialist Singapore. All rights reserved.</p>
        <div className="flex gap-4 font-semibold">
          <span className="hover:text-white cursor-pointer" onClick={() => onNavigate('about_contact')}>Preston Soon CEA Ref: R024855C</span>
          <span>•</span>
          <span className="hover:text-white cursor-pointer" onClick={openInquiryModal}>BNI Global Member Code Verified</span>
        </div>
      </div>
    </footer>
  );
}
