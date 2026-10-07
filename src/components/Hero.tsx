import React, { useState } from 'react';
import { ACADEMIC_DATA } from '../data/academicData';
import {
  FileText,
  Linkedin,
  BookOpen,
  Check,
  Copy,
  Bot,
  Sparkles,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenAssistant: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenAssistant }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(ACADEMIC_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="pt-10 pb-16 md:pt-14 md:pb-20 border-b border-[#E6DFD1] bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Scholarly Information & Actions (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Primary Scholar Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 tracking-tight leading-none">
                {ACADEMIC_DATA.personal.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-700 tracking-tight">
                {ACADEMIC_DATA.personal.title}
              </h2>
              <p className="text-xs sm:text-sm font-mono text-stone-500 font-medium leading-relaxed">
                Department of Mathematics & Computing,<br />
                Dr B R Ambedkar National Institute of Technology, Jalandhar, Punjab, India.
              </p>
            </div>

            {/* Academic Statement & Research Vision */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              {ACADEMIC_DATA.personal.summary}
            </p>

            {/* Key Research Areas Chips */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Primary Research Pillars:</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  "Estimation of Parameters",
                  "Survey Sampling",
                  "Uncertainty Quantification in AI/ML",
                  "Robust Estimation",
                  "Monte Carlo Simulations",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#FFFDF9] border border-[#DDD5C4] text-stone-700 shadow-2xs hover:border-[#C5B9A4] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons Strip */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-50 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Academic CV (PDF)</span>
              </button>

              <button
                onClick={onOpenAssistant}
                className="px-4 py-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-2xs"
              >
                <Bot className="w-4 h-4 text-blue-600" />
                <span>Ask Scholar AI</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-2.5 rounded-lg bg-[#FFFDF9] hover:bg-[#F3ECE0] border border-[#DDD5C4] text-stone-700 text-xs sm:text-sm font-medium flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-stone-500" />
                    <span>{ACADEMIC_DATA.personal.email}</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-1.5 pl-1">
                <a
                  href={ACADEMIC_DATA.personal.googleScholar}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg border border-[#DDD5C4] bg-[#FFFDF9] text-stone-800 hover:bg-[#F3ECE0] transition-colors flex items-center gap-1.5 text-xs font-semibold shadow-2xs"
                  title="Google Scholar Profile"
                >
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span className="hidden sm:inline">Scholar</span>
                </a>

                <a
                  href={ACADEMIC_DATA.personal.researchGate}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg border border-[#DDD5C4] bg-[#FFFDF9] text-stone-800 hover:bg-[#F3ECE0] transition-colors flex items-center gap-1.5 text-xs font-semibold shadow-2xs"
                  title="ResearchGate Profile"
                >
                  <span className="font-bold text-teal-700 text-xs">R<sup>G</sup></span>
                  <span className="hidden sm:inline">ResearchGate</span>
                </a>

                <a
                  href={ACADEMIC_DATA.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg border border-[#DDD5C4] bg-[#FFFDF9] text-stone-700 hover:bg-[#F3ECE0] transition-colors shadow-2xs"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Scholar Portrait & Academic Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="scholar-card p-5 bg-[#FFFDF9] border border-[#E6DFD1] shadow-card space-y-4 relative overflow-hidden">
              {/* Portrait Image with subtle frame */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-stone-100 border border-[#E6DFD1]">
                <img
                  src="./alok_kumar.jpg"
                  alt="Alok Kumar - PhD Scholar NIT Jalandhar"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-stone-900/85 backdrop-blur-xs text-white border border-stone-700/60 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold leading-tight">Alok Kumar</div>
                    <div className="text-[10px] text-stone-300 font-mono">Senior Research Fellow</div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
