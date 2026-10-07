import React from 'react';
import { ACADEMIC_DATA } from '../data/academicData';
import {
  GraduationCap,
  Calendar,
  MapPin,
} from 'lucide-react';

export const ExperienceTeaching: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-20 bg-[#F3EFE6] border-b border-[#E6DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>ACADEMIC RESEARCH & TEACHING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Fellowship Research & Teaching Assistantship
          </h2>
        </div>

        {/* Experience Cards Grid */}
        <div className="space-y-6">
          {ACADEMIC_DATA.experience.map((item) => (
            <div
              key={item.id}
              className="scholar-card p-6 sm:p-8 bg-[#FFFDF9] space-y-6 border border-[#E6DFD1]"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E6DFD1]">
                <div>
                  <h3 className="text-xl font-bold text-stone-900">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-stone-700 flex flex-wrap items-center gap-2 mt-0.5">
                    <span>{item.institution}</span>
                    <span>•</span>
                    <span className="text-stone-500 font-normal flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#DDD5C4] text-xs font-mono font-medium text-stone-700 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-stone-500" />
                  <span>{item.period}</span>
                </div>
              </div>

              {item.description.includes('- ') ? (
                <ul className="space-y-2 text-xs sm:text-sm text-stone-600 leading-relaxed pl-5 list-disc">
                  {item.description
                    .split('\n')
                    .map((line) => line.trim())
                    .filter(Boolean)
                    .map((line, index) => (
                      <li key={`${item.id}-${index}`}>
                        {line.replace(/^-\s*/, '')}
                      </li>
                    ))}
                </ul>
              ) : (
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              )}

              {/* Highlights & Contributions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {item.highlights.map((hl) => (
                  <div
                    key={hl.title}
                    className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6DFD1] flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-stone-900 leading-tight">
                          {hl.title}
                        </h4>
                        {hl.metric && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                            {hl.metric}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-stone-600 leading-relaxed">
                        {hl.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E6DFD1]/60 flex flex-wrap gap-1">
                      {hl.skills.map((s) => (
                        <span
                          key={s}
                          className="px-1.5 py-0.5 rounded bg-[#EBE5D8] text-[10px] font-mono text-stone-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
