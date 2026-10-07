import React from 'react';
import { ACADEMIC_DATA } from '../data/academicData';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Trophy,
} from 'lucide-react';

export const EducationAwards: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-20 bg-[#F3EFE6] border-b border-[#E6DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>ACADEMIC DEGREES, HONORS & WORKSHOPS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Education & Advanced Training
          </h2>
        </div>

        {/* Top Split: Education Degrees & Awards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Left 2 Cols: Degrees Timeline */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-wider text-stone-600 uppercase flex items-center gap-1.5 mb-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Academic Degrees</span>
            </h3>

            {ACADEMIC_DATA.education.map((edu) => (
              <div
                key={edu.id}
                className="scholar-card p-5 sm:p-6 bg-[#FFFDF9] space-y-3 border border-[#E6DFD1]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-[#E6DFD1]">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-stone-900">
                        {edu.degree}
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-stone-700 mt-0.5">
                      {edu.institution}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-mono text-stone-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {edu.thesis && (
                  <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E6DFD1] text-xs">
                    <span className="font-bold text-stone-800">Thesis Title: </span>
                    <span className="italic text-stone-700 font-serif">"{edu.thesis}"</span>
                  </div>
                )}

                <ul className="space-y-1.5 text-xs text-stone-600 pt-1">
                  {edu.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Col: Awards & GATE AIR 81 Spotlight */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-wider text-stone-600 uppercase flex items-center gap-1.5 mb-2">
              <Award className="w-4 h-4 text-amber-600" />
              <span>National Ranks & Honors</span>
            </h3>

            {/* GATE AIR 81 Spotlight Card */}
            <div className="scholar-card p-6 bg-gradient-to-br from-[#FFFDF9] via-amber-50/40 to-amber-100/40 border border-amber-200 space-y-4 relative overflow-hidden">
              <div className="w-24 h-24 absolute -bottom-4 -right-4 rounded-full bg-amber-200/40 blur-xl pointer-events-none"></div>

              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-amber-100 text-amber-800">
                  <Trophy className="w-5 h-5 text-amber-600" />
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-extrabold bg-amber-500 text-white shadow-xs">
                  AIR 81
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="text-base font-extrabold text-stone-900">
                  GATE Statistics 2022
                </h4>
                <p className="text-xs font-semibold text-amber-800">
                  Graduate Aptitude Test in Engineering
                </p>
                <p className="text-xs text-stone-600 leading-relaxed pt-1">
                  Achieved All India Rank 81 (AIR 81) across India in Mathematical Statistics, reflecting top-tier percentile proficiency in estimation theory, probability, and inference.
                </p>
              </div>
            </div>

            {/* Senior Research Fellowship (SRF) Card */}
            <div className="scholar-card p-5 bg-[#FFFDF9] border border-[#E6DFD1] space-y-2">
              <div className="flex items-center justify-between">
                <span className="p-1.5 rounded-md bg-blue-50 text-blue-700">
                  <Award className="w-4 h-4 text-blue-600" />
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#FAF7F2] text-stone-700 border border-[#DDD5C4]">
                  2022 – Present
                </span>
              </div>
              <h4 className="text-sm font-bold text-stone-900">
                Senior Research Fellowship (SRF)
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                National doctoral research fellowship at Dr B R Ambedkar National Institute of Technology, Jalandhar.
              </p>
            </div>
          </div>
        </div>

        {/* Specialized Workshops & Certifications Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono font-bold tracking-wider text-stone-600 uppercase flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-purple-600" />
              <span>Specialized Advanced Training & Workshops</span>
            </h3>
            <span className="text-xs text-stone-500 font-mono hidden sm:inline">
              ISI Kolkata • IISc Bangalore • Calcutta Univ • Stanford/Coursera
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACADEMIC_DATA.workshops.map((ws) => (
              <div
                key={ws.id}
                className="scholar-card p-5 bg-[#FFFDF9] border border-[#E6DFD1] flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#F3EFE6] text-stone-700">
                      {ws.year}
                    </span>
                    <span className="text-[10px] font-mono text-purple-700 font-bold">
                      {ws.organization.split(' ')[0]}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-stone-900 leading-tight">
                    {ws.title}
                  </h4>
                  <div className="text-[11px] font-semibold text-stone-600">
                    {ws.organization}
                  </div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    {ws.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E6DFD1] flex flex-wrap gap-1">
                  {ws.tags.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 rounded bg-[#FAF7F2] border border-[#E6DFD1] text-[9px] font-mono text-stone-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
