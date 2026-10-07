import React, { useState } from 'react';
import { ACADEMIC_DATA } from '../data/academicData';
import {
  Sigma,
  Brain,
  Code2,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

export const SkillsGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sigma':
        return <Sigma className="w-4 h-4 text-blue-600" />;
      case 'Brain':
        return <Brain className="w-4 h-4 text-purple-600" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 text-emerald-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-amber-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-blue-600" />;
    }
  };

  const filteredGroups = ACADEMIC_DATA.skillsData.filter((group) => {
    if (activeCategory === 'all') return true;
    return group.id === activeCategory;
  });

  return (
    <section id="skills" className="py-16 md:py-20 bg-[#FAF7F2] border-b border-[#E6DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
              <Code2 className="w-3.5 h-3.5 text-blue-600" />
              <span>TECHNICAL & METHODOLOGICAL COMPETENCIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Statistical Modeling, Machine Learning & Tools
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#EBE5D8] p-1 rounded-lg border border-[#DDD5C4]">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#FFFDF9] text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Competencies
            </button>
            {ACADEMIC_DATA.skillsData.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveCategory(group.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === group.id
                    ? 'bg-[#FFFDF9] text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {group.category.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className="scholar-card p-6 bg-[#FFFDF9] space-y-4 border border-[#E6DFD1]"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-[#E6DFD1]">
                <span className="p-2 rounded-lg bg-[#F3EDE2]">
                  {getCategoryIcon(group.iconName)}
                </span>
                <div>
                  <h3 className="text-base font-bold text-stone-900">
                    {group.category}
                  </h3>
                  <p className="text-xs text-stone-500">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E6DFD1] flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#F3ECE0] transition-colors"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-stone-900">
                          {skill.name}
                        </span>
                        {skill.badge && (
                          <span className="px-2 py-0.2 rounded text-[10px] font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-stone-600">
                        {skill.context}
                      </p>
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
