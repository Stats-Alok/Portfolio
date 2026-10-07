import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Publications } from './components/Publications';
import { ExperienceTeaching } from './components/ExperienceTeaching';
import { SkillsGrid } from './components/SkillsGrid';
import { EducationAwards } from './components/EducationAwards';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScholarBot } from './components/ScholarBot';
import { AcademicCVModal } from './components/AcademicCVModal';
import { Bot } from 'lucide-react';

export default function App() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-stone-900 font-sans selection:bg-blue-600 selection:text-white antialiased">
      {/* Top Academic Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAssistant={() => setIsAssistantOpen(true)}
      />

      {/* Main Scholarly Sections */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAssistant={() => setIsAssistantOpen(true)}
        />
        <EducationAwards />
        <Publications />
        <ExperienceTeaching />
        <SkillsGrid />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Academic Footer */}
      <Footer />

      {/* Floating Scholar AI Assistant Button */}
      <button
        onClick={() => setIsAssistantOpen(true)}
        className="fixed bottom-6 right-6 z-40 px-4 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white shadow-elevated hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-stone-700 text-xs font-semibold"
        title="Open Scholar AI Research Screener"
      >
        <Bot className="w-4 h-4 text-blue-400" />
        <span>Ask Scholar AI</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      </button>

      {/* Modals */}
      <ScholarBot
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
      />

      <AcademicCVModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
