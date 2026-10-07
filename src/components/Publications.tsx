import React, { useState } from 'react';
import { ACADEMIC_DATA, PublicationItem } from '../data/academicData';
import {
  Check,
  ExternalLink,
  Quote,
} from 'lucide-react';

export const Publications: React.FC = () => {
  const [copiedBibtexId, setCopiedBibtexId] = useState<string | null>(null);

  const filteredPublications = ACADEMIC_DATA.publications;

  const handleCopyBibtex = (pub: PublicationItem) => {
    navigator.clipboard.writeText(pub.bibtex);
    setCopiedBibtexId(pub.id);
    setTimeout(() => setCopiedBibtexId(null), 2500);
  };

  return (
    <section id="publications" className="py-16 md:py-20 bg-[#FAF7F2] border-b border-[#E6DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Publications & Conference
          </h2>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 tracking-tight">Journal Articles</h3>
            <div className="space-y-4">
              {filteredPublications.filter((pub) => pub.type === 'journal').map((pub) => {
                const isBibtexCopied = copiedBibtexId === pub.id;

                return (
                  <div
                    key={pub.id}
                    className="scholar-card p-5 sm:p-6 bg-[#FFFDF9] space-y-4 border border-[#E6DFD1] hover:border-[#C5B9A4] transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#F3EFE6] text-stone-700 border border-[#DDD5C4]">
                          {pub.year}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold ${
                          pub.status === 'Published'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-amber-50 text-amber-800 border border-amber-200'
                        }`}>
                          {pub.status}
                        </span>
                      </div>

                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-mono font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                          <span>DOI: {pub.doi}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                        {pub.title}
                      </h3>
                      <div className="text-xs sm:text-sm text-stone-700 font-medium flex flex-wrap items-center gap-1.5">
                        <span>
                          {pub.authors.split('Alok Kumar').map((part, i, arr) => (
                            <React.Fragment key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <strong className="text-stone-950 font-extrabold underline decoration-blue-500 underline-offset-2">
                                  Alok Kumar
                                </strong>
                              )}
                            </React.Fragment>
                          ))}
                        </span>
                        <span>•</span>
                        <span className="italic text-stone-600 font-serif text-sm">
                          {pub.venue}
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E6DFD1] flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {pub.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#E6DFD1] text-[10px] font-mono font-medium text-stone-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleCopyBibtex(pub)}
                          className="px-3 py-1.5 rounded-md bg-[#FAF7F2] hover:bg-[#F3ECE0] border border-[#DDD5C4] text-xs font-medium text-stone-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                          title="Copy BibTeX citation"
                        >
                          {isBibtexCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-700 font-semibold">BibTeX Copied!</span>
                            </>
                          ) : (
                            <>
                              <Quote className="w-3.5 h-3.5 text-stone-500" />
                              <span>Copy BibTeX</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 tracking-tight">Conference Presentations</h3>
            <div className="space-y-4">
              {filteredPublications.filter((pub) => pub.type === 'conference').map((pub) => {
                const isBibtexCopied = copiedBibtexId === pub.id;

                return (
                  <div
                    key={pub.id}
                    className="scholar-card p-5 sm:p-6 bg-[#FFFDF9] space-y-4 border border-[#E6DFD1] hover:border-[#C5B9A4] transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-purple-50 text-purple-800 border border-purple-200">
                          Conference Presentation
                        </span>
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#F3EFE6] text-stone-700 border border-[#DDD5C4]">
                          {pub.year}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-stone-100 text-stone-700 border border-stone-300">
                          {pub.status}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                        {pub.title}
                      </h3>
                      <div className="text-xs sm:text-sm text-stone-700 font-medium flex flex-wrap items-center gap-1.5">
                        <span>
                          {pub.authors.split('Alok Kumar').map((part, i, arr) => (
                            <React.Fragment key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <strong className="text-stone-950 font-extrabold underline decoration-blue-500 underline-offset-2">
                                  Alok Kumar
                                </strong>
                              )}
                            </React.Fragment>
                          ))}
                        </span>
                        <span>•</span>
                        <span className="italic text-stone-600 font-serif text-sm">
                          {pub.venue}
                        </span>
                        {pub.location && (
                          <>
                            <span>•</span>
                            <span className="text-stone-500 text-xs">{pub.location}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E6DFD1] flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {pub.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#E6DFD1] text-[10px] font-mono font-medium text-stone-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleCopyBibtex(pub)}
                          className="px-3 py-1.5 rounded-md bg-[#FAF7F2] hover:bg-[#F3ECE0] border border-[#DDD5C4] text-xs font-medium text-stone-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                          title="Copy BibTeX citation"
                        >
                          {isBibtexCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-700 font-semibold">BibTeX Copied!</span>
                            </>
                          ) : (
                            <>
                              <Quote className="w-3.5 h-3.5 text-stone-500" />
                              <span>Copy BibTeX</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
