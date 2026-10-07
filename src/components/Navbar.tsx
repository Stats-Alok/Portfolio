import React, { useState } from 'react';
import { ACADEMIC_DATA } from '../data/academicData';
import {
  FileText,
  Bot,
  Mail,
  Linkedin,
  BookOpen,
  Menu,
  X,
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenAssistant: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenAssistant }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Publications', href: '#publications' },
    { label: 'Fellowship & Teaching', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education & Awards', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E6DFD1] transition-all">
      {/* Top Academic Status & Notification Bar */}
      <div className="bg-stone-900 text-stone-100 px-4 py-1.5 text-xs font-medium flex items-center justify-between overflow-x-auto whitespace-nowrap">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-stone-300 font-mono text-[11px] whitespace-nowrap">
              <strong className="text-white font-sans">{ACADEMIC_DATA.personal.status}</strong>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-stone-400 text-xs flex-shrink-0">
            <a
              href={`mailto:${ACADEMIC_DATA.personal.email}`}
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span>{ACADEMIC_DATA.personal.email}</span>
            </a>
            <span>•</span>
            <a
              href={ACADEMIC_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <Linkedin className="w-3 h-3 text-blue-400" />
              <span>LinkedIn</span>
            </a>
            <span>•</span>
            <a
              href={ACADEMIC_DATA.personal.googleScholar}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <BookOpen className="w-3 h-3 text-emerald-400" />
              <span>Google Scholar</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Identity & Scholar Badge */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center gap-2.5 cursor-pointer group flex-shrink-0"
        >
          <div className="w-9 h-9 rounded-lg bg-stone-900 text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-blue-600 transition-colors flex-shrink-0 overflow-hidden border border-stone-800">
            <img
              src="./alok_kumar.jpg"
              alt="Alok Kumar"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                // fallback to initials if image doesn't load
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span className="hidden">AK</span>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1.5 whitespace-nowrap leading-none">
              <span className="font-extrabold text-stone-900 text-sm tracking-tight">
                {ACADEMIC_DATA.personal.name}
              </span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#EBE5D8] text-stone-800 border border-[#DDD5C4] whitespace-nowrap">
                NIT, Jalandhar
              </span>
            </div>
            <p className="text-[11px] text-stone-500 font-medium whitespace-nowrap mt-1 leading-none">
              Ph.D. Research Scholar in Statistics
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 flex-shrink-0">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="px-2.5 py-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 hover:bg-[#EBE5D8] rounded-md transition-all cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={onOpenAssistant}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            <Bot className="w-3.5 h-3.5 text-blue-600" />
            <span>Ask Scholar AI</span>
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-stone-900 hover:bg-stone-800 text-stone-50 text-xs font-semibold shadow-xs transition-all cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Academic CV</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-[#EBE5D8] text-stone-700 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E6DFD1] bg-[#FAF7F2] px-4 py-4 space-y-3">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-left text-sm font-semibold text-stone-700 hover:bg-[#EBE5D8] rounded-md transition-colors w-full"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-2 border-t border-[#E6DFD1] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssistant();
              }}
              className="w-full py-2 px-3 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold flex items-center justify-center gap-2 border border-blue-200"
            >
              <Bot className="w-4 h-4 text-blue-600" />
              <span>Ask Scholar AI Assistant</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2 px-3 rounded-md bg-stone-900 text-white text-xs font-semibold flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View / Download Academic CV (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
