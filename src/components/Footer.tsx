import React from 'react';
import { ACADEMIC_DATA } from '../data/academicData';
import {
  BookOpen,
  Linkedin,
  Mail,
  ArrowUp,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E6DFD1] pt-12 pb-8 text-stone-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E6DFD1]">
          {/* Identity */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-stone-900 text-sm">
                {ACADEMIC_DATA.personal.name}
              </span>
              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#EBE5D8] text-stone-800">
                Ph.D. Scholar at Department of Mathematics & Computing 
              </span>
            </div>
            <p className="text-xs text-stone-500">
               Dr B R Ambedkar National Institute of Technology(NIT), Jalandhar, Punjab, India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={ACADEMIC_DATA.personal.googleScholar}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-[#DDD5C4] bg-[#FFFDF9] text-stone-700 hover:text-emerald-700 hover:bg-[#F3ECE0] transition-colors"
              title="Google Scholar"
            >
              <BookOpen className="w-4 h-4" />
            </a>

            <a
              href={ACADEMIC_DATA.personal.researchGate}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-[#DDD5C4] bg-[#FFFDF9] text-teal-700 hover:bg-[#F3ECE0] transition-colors font-bold text-xs"
              title="ResearchGate"
            >
              R<sup>G</sup>
            </a>

            <a
              href={ACADEMIC_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-[#DDD5C4] bg-[#FFFDF9] text-blue-600 hover:bg-[#F3ECE0] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${ACADEMIC_DATA.personal.email}`}
              className="p-2 rounded-lg border border-[#DDD5C4] bg-[#FFFDF9] text-stone-700 hover:text-stone-950 hover:bg-[#F3ECE0] transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-[#DDD5C4] bg-[#FFFDF9] text-stone-700 hover:bg-[#F3ECE0] transition-colors ml-2 cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} {ACADEMIC_DATA.personal.name}. All research, methodologies, and publications credited to authors and respective journals.
          </div>
          <div className="flex items-center gap-3">
            <span>Springer Nature</span>
            <span>•</span>
            <span>GATE AIR 81</span>
            <span>•</span>
            <span>NIT Jalandhar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
