import React, { useState } from 'react';
import { ACADEMIC_DATA } from '../data/academicData';
import {
  Layers,
  Sigma,
  TrendingUp,
  ShieldAlert,
  Brain,
  ExternalLink,
  CheckCircle2,
  Binary,
  Compass,
} from 'lucide-react';

export const ResearchMethodologies: React.FC = () => {
  const [activeMethodId, setActiveMethodId] = useState<string>('dual-optimal-auxiliary');

  const activeMethod =
    ACADEMIC_DATA.methodologies.find((m) => m.id === activeMethodId) ||
    ACADEMIC_DATA.methodologies[0];

  const getMethodIcon = (id: string) => {
    switch (id) {
      case 'dual-optimal-auxiliary':
        return <Sigma className="w-4 h-4 text-blue-600" />;
      case 'rational-ranked-set-sampling':
        return <TrendingUp className="w-4 h-4 text-emerald-600" />;
      case 'reerss-outlier-mitigation':
        return <ShieldAlert className="w-4 h-4 text-amber-600" />;
      case 'uncertainty-quantification-ml':
        return <Brain className="w-4 h-4 text-purple-600" />;
      default:
        return <Layers className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <section id="research" className="py-16 md:py-20 bg-[#F3EFE6] border-b border-[#E6DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
            <Sigma className="w-3.5 h-3.5 text-blue-600" />
            <span>THEORETICAL INNOVATIONS // STATISTICAL METHODOLOGIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Novel Estimation Frameworks & Research Blueprints
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Theoretical derivations, rational ranking algorithms, and empirical simulation workflows developed during doctoral research at NIT Jalandhar.
          </p>
        </div>

        {/* Blueprint Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-8">
          {ACADEMIC_DATA.methodologies.map((method) => (
            <button
              key={method.id}
              onClick={() => setActiveMethodId(method.id)}
              className={`p-3.5 rounded-xl text-left transition-all cursor-pointer border ${
                activeMethodId === method.id
                  ? 'bg-[#FFFDF9] border-blue-500 shadow-card ring-1 ring-blue-500/20'
                  : 'bg-[#EBE5D8]/70 border-[#DDD5C4] hover:border-[#C5B9A4] hover:bg-[#FFFDF9] text-stone-700'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="p-1 rounded bg-[#E2DAC9]">
                  {getMethodIcon(method.id)}
                </span>
                <span className="text-[10px] font-mono font-medium text-stone-500">
                  {method.badge}
                </span>
              </div>
              <h3 className={`text-xs font-bold leading-snug line-clamp-2 ${activeMethodId === method.id ? 'text-blue-900' : 'text-stone-900'}`}>
                {method.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Active Methodology Detail Blueprint */}
        <div className="scholar-card p-6 sm:p-8 bg-[#FFFDF9] space-y-8">
          {/* Blueprint Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#E6DFD1]">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                  {activeMethod.badge}
                </span>
                <span className="text-xs text-stone-600 font-medium">
                  {activeMethod.venue}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                {activeMethod.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-medium">
                {activeMethod.subtitle}
              </p>
            </div>

            {/* Impact Metric Callout */}
            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg lg:max-w-xs flex-shrink-0">
              <div className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-wider">
                THEORETICAL EFFICIENCY GAIN
              </div>
              <div className="text-xs font-bold text-emerald-900 mt-0.5">
                {activeMethod.impactMetric}
              </div>
              {activeMethod.doi && (
                <a
                  href={`https://doi.org/${activeMethod.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 text-[11px] font-mono text-emerald-700 hover:text-emerald-900 underline flex items-center gap-1"
                >
                  <span>DOI: {activeMethod.doi}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* Problem vs Mathematical Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6DFD1] space-y-2">
              <div className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Statistical Limitation / Research Gap</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                {activeMethod.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 space-y-2">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Proposed Estimator & Theoretical Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                {activeMethod.solution}
              </p>
            </div>
          </div>

          {/* Mathematical Formulation Display Box */}
          <div className="p-4 sm:p-5 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono font-semibold text-stone-400 flex items-center gap-2">
                <Binary className="w-4 h-4 text-emerald-400" />
                <span>Mathematical Estimator Formulation</span>
              </div>
              <span className="text-[10px] font-mono text-stone-400 bg-stone-800 px-2 py-0.5 rounded">
                LaTeX Syntax / Analytical Model
              </span>
            </div>
            <div className="font-mono text-xs sm:text-sm bg-stone-950 p-3 rounded-lg text-emerald-300 overflow-x-auto whitespace-pre">
              {activeMethod.formula}
            </div>
          </div>

          {/* 4-Step Methodology Pipeline */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-stone-600" />
              <span>Step-by-Step Derivation & Verification Workflow</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeMethod.steps.map((step, idx) => (
                <div
                  key={step.title}
                  className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6DFD1] flex flex-col justify-between space-y-2"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] flex items-center justify-center font-mono">
                        0{idx + 1}
                      </span>
                      <h4 className="text-xs font-bold text-stone-900">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-stone-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Badges Footer */}
          <div className="pt-4 border-t border-[#E6DFD1] flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold text-stone-500 mr-2">
              Methods & Tools:
            </span>
            {activeMethod.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-[#F3EFE6] border border-[#DDD5C4] text-[11px] font-mono font-medium text-stone-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
