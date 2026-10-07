import React, { useState } from 'react';
import { ACADEMIC_DATA } from '../data/academicData';
import confetti from 'canvas-confetti';
import {
  Mail,
  Linkedin,
  BookOpen,
  MapPin,
  Check,
  Copy,
  Send,
  FileText,
  Quote,
  MessageSquare,
} from 'lucide-react';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBibtexBundle, setCopiedBibtexBundle] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    affiliation: '',
    email: '',
    subject: 'Research Collaboration',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(ACADEMIC_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyAllBibtex = () => {
    const allBibtex = ACADEMIC_DATA.publications
      .map((p) => `% ${p.title}\n${p.bibtex}`)
      .join('\n\n');
    navigator.clipboard.writeText(allBibtex);
    setCopiedBibtexBundle(true);
    setTimeout(() => setCopiedBibtexBundle(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
      });
      setTimeout(() => {
        setSubmitted(false);
        setFormState({
          name: '',
          affiliation: '',
          email: '',
          subject: 'Research Collaboration',
          message: '',
        });
      }, 4000);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-[#FAF7F2] border-b border-[#E6DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>CONNECT & COLLABORATE // ACADEMIC OUTREACH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Academic Inquiries & Research Discussions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Scholar Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Contact Card */}
            <div className="scholar-card p-6 bg-[#FFFDF9] border border-[#E6DFD1] space-y-4">
              <h3 className="text-sm font-bold text-stone-900 uppercase font-mono tracking-wider">
                Direct Contact Channels
              </h3>

              <div className="space-y-3">
                {/* Email Item */}
                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E6DFD1] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-bold text-stone-500 uppercase">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${ACADEMIC_DATA.personal.email}`}
                        className="text-xs sm:text-sm font-bold text-stone-900 hover:text-blue-600 transition-colors"
                      >
                        {ACADEMIC_DATA.personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg hover:bg-[#EBE5D8] text-stone-600 transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Institution Location */}
                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E6DFD1] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold text-stone-500 uppercase">
                      Department Location
                    </div>
                    <div className="text-xs font-semibold text-stone-800 leading-snug">
                      Dr. B R Ambedkar National Institute of Technology, Jalandhar, Punjab 144008, India
                    </div>
                  </div>
                </div>

                {/* Profiles Row */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <a
                    href={ACADEMIC_DATA.personal.googleScholar}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E6DFD1] hover:border-emerald-400 hover:bg-emerald-50/40 text-center transition-all flex flex-col items-center gap-1 group"
                  >
                    <BookOpen className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-bold text-stone-800">Scholar</span>
                  </a>

                  <a
                    href={ACADEMIC_DATA.personal.researchGate}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E6DFD1] hover:border-teal-400 hover:bg-teal-50/40 text-center transition-all flex flex-col items-center gap-1 group"
                  >
                    <span className="font-bold text-teal-700 text-xs group-hover:scale-110 transition-transform">R<sup>G</sup></span>
                    <span className="text-[11px] font-bold text-stone-800">ResearchGate</span>
                  </a>

                  <a
                    href={ACADEMIC_DATA.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E6DFD1] hover:border-blue-400 hover:bg-blue-50/40 text-center transition-all flex flex-col items-center gap-1 group"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-bold text-stone-800">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="scholar-card p-5 bg-[#FFFDF9] border border-[#E6DFD1] space-y-3">
              <h3 className="text-xs font-bold text-stone-900 uppercase font-mono tracking-wider">
                Academic Resources
              </h3>
              <div className="flex flex-col gap-2">
                <button
                  onClick={onOpenResume}
                  className="w-full py-2.5 px-4 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open Academic Curriculum Vitae (PDF)</span>
                </button>

                <button
                  onClick={handleCopyAllBibtex}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#FAF7F2] hover:bg-[#F3ECE0] border border-[#DDD5C4] text-stone-800 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copiedBibtexBundle ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">All 6 Citations Copied!</span>
                    </>
                  ) : (
                    <>
                      <Quote className="w-4 h-4 text-stone-600" />
                      <span>Copy Full BibTeX Bundle (.bib)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Collaboration Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="scholar-card p-6 sm:p-8 bg-[#FFFDF9] border border-[#E6DFD1] space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E6DFD1]">
                <div>
                  <h3 className="text-lg font-bold text-stone-900">
                    Send an Academic Inquiry
                  </h3>
                  <p className="text-xs text-stone-500">
                    Direct academic correspondence to Alok Kumar
                  </p>
                </div>
                <span className="p-2 rounded-lg bg-[#F3EDE2]">
                  <MessageSquare className="w-4 h-4 text-stone-700" />
                </span>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto">
                    Thank you for your academic inquiry. A notification has been logged for Alok Kumar at <span className="font-mono font-semibold">stalokpatwa@gmail.com</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-stone-700">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Prof. / Dr. / Researcher"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#DDD5C4] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-stone-900"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-stone-700">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="researcher@university.edu"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#DDD5C4] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-stone-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-stone-700">
                        Institution / University
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. University / Research Lab"
                        value={formState.affiliation}
                        onChange={(e) => setFormState({ ...formState, affiliation: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#DDD5C4] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-stone-900"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-stone-700">
                        Inquiry Topic
                      </label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#DDD5C4] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-stone-900"
                      >
                        <option value="Research Collaboration">Joint Research / Paper Collaboration</option>
                        <option value="Postdoctoral Opportunity">Postdoc / Academic Position Inquiry</option>
                        <option value="Preprint Request">Paper Preprint / BibTeX Request</option>
                        <option value="Guest Lecture / Tutorial">Guest Lecture / Seminar Invitation</option>
                        <option value="General Academic Question">General Statistical Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">
                      Message / Research Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please outline your research interests, proposed discussion topic, or inquiry..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#DDD5C4] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-stone-900"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Academic Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
