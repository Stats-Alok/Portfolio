import React, { useState } from 'react';
import {
  X,
  Printer,
  Copy,
  Check,
  FileText,
} from 'lucide-react';

interface AcademicCVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AcademicCVModal: React.FC<AcademicCVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const cvText = `
ALOK KUMAR
Ph.D. Research Scholar & Senior Research Fellow — Statistics & Statistical Learning Theory
Email: stalokpatwa@gmail.com | LinkedIn: https://www.linkedin.com/in/alokpatwa/
Google Scholar & ResearchGate: Alok Kumar, NIT Jalandhar

BIO / RESEARCH PROFILE:
Senior Research Fellow at NIT Jalandhar, working on advanced statistical methodologies for real-world data, with a focus on developing efficient and scalable solutions. My research interests extend to emerging areas such as uncertainty quantification in machine learning and AI models, aiming to enhance their robustness, interpretability, and trustworthiness in complex decision-making systems.

EDUCATION:
• Ph.D. in Statistics (2022 – Present)
  Dr B R Ambedkar National Institute of Technology (NIT), Jalandhar, Punjab, India
  Thesis title: Improved Estimation of Population Parameters using Auxiliary Information under Ranked Set Sampling.
  Coursework: Mathematics and Computing (CGPA: 8.80 / 10.0)
• M.Sc. Statistics and Computing (2018 – 2020)
  Banaras Hindu University (BHU), Varanasi, Uttar Pradesh, India
  Thesis title: Applying Random Forest Algorithm for Classification.
  CGPA: 8.38
• B.Sc. Statistics (2015 – 2018)
  Central University of Rajasthan (CURaj), Ajmer, Rajasthan, India
  Subjects: Statistics, Computer Science, Economics and Mathematics.
  CGPA: 8.04

RESEARCH INTERESTS:
• Estimation of Population Parameters
• Sampling Techniques (Simple Random Sampling, Ranked Set Sampling, Adaptive Sampling, etc.)
• Statistical Inference & Asymptotic Theory
• Machine Learning Modelling
• Computational Statistics & Monte Carlo Simulations
• Uncertainty Quantification in AI & ML Models

PUBLICATIONS (JOURNAL ARTICLES):
1. R. R. Sinha, Alok Kumar. An Improved Approach with Rational Ranking for Mean Estimation Using Dual Optimal Auxiliary Information. Accepted @ Applied Mathematics—A Journal of Chinese Universities, 2025.
2. Alok Kumar, R. R. Sinha. Enhancing Mean Estimation Accuracy Through Optimal Auxiliary Information in Rational Ranked Set Sampling. Journal of Statistical Theory and Practice, 2026. DOI: 10.1007/s42519-025-00530-7
3. R. R. Sinha, Alok Kumar. Robust Except Extreme Ranked Set Sampling (REERSS): An Approach to Outlier Mitigation. National Academy Science Letters, Springer, 2026. DOI: https://doi.org/10.1007/s40009-026-02174-y
4. Alok Kumar, R. R. Sinha, Gajendra K. Vishwakarma. Optimized Mean Estimation using Diverse Auxiliary Information under Except Extreme Ranked Set Sampling: Analysis and Application with Simulated and Real Data. Accepted @ STATISTICS IN TRANSITION new series, 2026.

CONFERENCE PRESENTATIONS:
1. Alok Kumar and R. R. Sinha. Ratio-cum-Exponential Estimator for Mean Estimation under Ranked Set Sampling. International Conference on Artificial Intelligence, Mathematical Science and Statistical Data Science (AIMSSDS-2026), Central University of South Bihar, Gaya, Bihar, India.
2. Alok Kumar, R. R. Sinha. Enhanced Estimator for Population Mean Using Auxiliary Information under Ordered Sampling Design. International Conference on Innovative Trends in Statistics, Optimization and Data Science (IC-ITSODS-2024), Kurukshetra University, Kurukshetra, Haryana, India.
3. R. R. Sinha, Alok Kumar. Efficient Estimation of Mean Using Auxiliary Information Under Ranked Set Sampling. International Conference on Modelling, Simulation and Optimization of Energy Systems (MSOES 2023), Canadian University Dubai, UAE.
4. R. R. Sinha, Alok Kumar. Estimation of Population mean based on Information of Auxiliary Variable and Attribute using Ranked Set Sampling. National Conference on Recent Advancements in Mathematical & Applied Sciences, 2023, Hans Raj Mahila Maha Vidyalaya, Jalandhar, Punjab, India.

AWARDS & HONORS:
• GATE-Statistics 2022: Achieved All India Rank 81 (AIR 81).
• Junior Research Fellowship (JRF): NIT Jalandhar (2022 – 2025).
• Senior Research Fellowship (SRF): NIT Jalandhar (2025 – Present).

TEACHING ASSISTANTSHIP (2022 – PRESENT):
• Conducted tutorials and laboratory sessions for Graduate and Undergraduate students at NIT Jalandhar in:
  - Engineering Mathematics-I
  - Engineering Mathematics-II
  - Probability Theory
  - Probability and Statistics
  - R-Programming Lab

SPECIALIZED WORKSHOPS & COURSES:
• Mathematical Foundations of Machine Learning (NPTEL & IISc Bangalore)
• Introduction to Statistical Learning Techniques (Indian Statistical Institute, Kolkata, 2024)
• Econometric Analysis (NPTEL & Calcutta University)
• Andrew Ng's Machine Learning (Coursera & Stanford)

SKILLS:
• Coding: R, Python (Basic), LaTeX, Markdown
• Tools: RStudio for IDE, Python for IDE, Visualization (ggplot2)
• Productivity: Word, Excel, PowerPoint, Overleaf
• Languages: English and Hindi (Strong reading, writing, and speaking competencies)
• Academic Research, Teaching, Training
    `.trim();

    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-stone-950/60 backdrop-blur-xs overflow-y-auto">
      <div className="w-full max-w-3xl bg-[#FFFDF9] border border-[#E6DFD1] rounded-2xl shadow-elevated overflow-hidden flex flex-col my-6 max-h-[92vh]">
        {/* Action Header */}
        <div className="bg-stone-900 text-white px-5 py-3 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-xs text-white">
                Curriculum Vitae (CV) // Alok Kumar
              </h3>
              <p className="text-[11px] text-stone-400">
                Ph.D. Research Scholar & Senior Research Fellow — Statistics & Statistical Learning Theory
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-2.5 py-1.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy plain text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-stone-800 text-stone-400 hover:text-white transition-colors ml-1 cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Academic CV Document Body */}
        <div className="p-8 sm:p-10 overflow-y-auto bg-white text-stone-900 space-y-6 text-xs font-sans print:p-0 print:text-black">
          {/* Header */}
          <div className="border-b-2 border-stone-800 pb-4 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900">
                ALOK KUMAR
              </h1>
              <p className="text-xs font-semibold text-stone-700">
                Ph.D. Research Scholar & Senior Research Fellow — Statistics & Statistical Learning Theory
              </p>
              <div className="text-[11px] text-stone-600 flex flex-wrap gap-x-4 gap-y-1 pt-1 font-mono">
                <span>Email: stalokpatwa@gmail.com</span>
                <span>LinkedIn: linkedin.com/in/alokpatwa</span>
                <span>Institution: NIT Jalandhar, Punjab, India</span>
              </div>
            </div>

            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-stone-300 shadow-2xs flex-shrink-0">
              <img
                src="./alok_kumar.jpg"
                alt="Alok Kumar"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-1">
            <h2 className="text-xs font-bold font-mono text-stone-800 uppercase tracking-wider border-b border-stone-300 pb-0.5">
              Research Profile & Bio
            </h2>
            <p className="text-xs text-stone-700 leading-relaxed pt-1">
              Ph.D. Research Scholar in Statistics at <strong>NIT Jalandhar</strong>, specializing in <strong>statistical estimation, ranked set sampling, survey sampling, and robust statistics</strong>. My research integrates <strong>theoretical development, computational methods, and real-data analysis</strong>, with broader interests in <strong>Median of Means estimation, order statistics, regularization, and high-dimensional statistics</strong>. I also have experience in <strong>R programming, university teaching, and peer review for statistical journals</strong>.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono text-stone-800 uppercase tracking-wider border-b border-stone-300 pb-0.5">
              Education
            </h2>
            <div className="space-y-3 pt-1">
              <div>
                <div className="flex justify-between font-bold text-stone-900 text-xs">
                  <span>Ph.D. in Statistics — Dr B R Ambedkar National Institute of Technology (NIT), Jalandhar</span>
                  <span className="font-mono text-[11px]">2022 – Present</span>
                </div>
                <div className="text-[11px] text-stone-700">
                  Thesis title: <em>Improved Estimation of Population Parameters using Auxiliary Information under Ranked Set Sampling.</em>
                </div>
                <div className="text-[11px] font-mono text-stone-600">Coursework: Mathematics and Computing (CGPA: 8.80 / 10.0)</div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-stone-900 text-xs">
                  <span>M.Sc. Statistics and Computing — Banaras Hindu University (BHU), Varanasi, Uttar Pradesh, India</span>
                  <span className="font-mono text-[11px]">2018 – 2020</span>
                </div>
                <div className="text-[11px] text-stone-700">
                  Thesis title: <em>Applying Random Forest Algorithm for Classification.</em>
                </div>
                <div className="text-[11px] font-mono text-stone-600">CGPA: 8.38 / 10.0</div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-stone-900 text-xs">
                  <span>B.Sc. Statistics — Central University of Rajasthan (CURaj), Ajmer, Rajasthan, India</span>
                  <span className="font-mono text-[11px]">2015 – 2018</span>
                </div>
                <div className="text-[11px] text-stone-700">
                  Subjects: Statistics, Computer Science, Economics and Mathematics.
                </div>
                <div className="text-[11px] font-mono text-stone-600">CGPA: 8.04 / 10.0</div>
              </div>
            </div>
          </div>

          {/* Research Interests */}
          <div className="space-y-1">
            <h2 className="text-xs font-bold font-mono text-stone-800 uppercase tracking-wider border-b border-stone-300 pb-0.5">
              Research Interests
            </h2>
            <div className="grid grid-cols-2 gap-2 pt-1 text-xs text-stone-700">
              <div>• Estimation of Population Parameters</div>
              <div>• Sampling Techniques (SRS, RSS, Adaptive Sampling, etc.)</div>
              <div>• Statistical Inference & Asymptotic Theory</div>
              <div>• Machine Learning Modelling</div>
              <div>• Computational Statistics & Monte Carlo Simulations</div>
              <div>• Uncertainty Quantification in AI & ML Models</div>
            </div>
          </div>

          {/* Publications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono text-stone-800 uppercase tracking-wider border-b border-stone-300 pb-0.5">
              List of Publications
            </h2>
            <div className="space-y-2 pt-1">
              <div className="font-bold text-[11px] text-stone-800">Journal Articles:</div>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-stone-700">
                <li>
                  R. R. Sinha, <strong>Alok Kumar</strong>. <em>An Improved Approach with Rational Ranking for Mean Estimation Using Dual Optimal Auxiliary Information</em>. Accepted @ <strong>Applied Mathematics—A Journal of Chinese Universities</strong>, 2025.
                </li>
                <li>
                  <strong>Alok Kumar</strong>, R. R. Sinha. <em>Enhancing Mean Estimation Accuracy Through Optimal Auxiliary Information in Rational Ranked Set Sampling</em>. <strong>Journal of Statistical Theory and Practice</strong>, 2026. DOI: 10.1007/s42519-025-00530-7.
                </li>
                <li>
                  R. R. Sinha, <strong>Alok Kumar</strong>. <em>Robust Except Extreme Ranked Set Sampling (REERSS): An Approach to Outlier Mitigation</em>. <strong>National Academy Science Letters</strong>, 2026. DOI: https://doi.org/10.1007/s40009-026-02174-y.
                </li>
                <li>
                  <strong>Alok Kumar</strong>, R. R. Sinha, Gajendra K. Vishwakarma. <em>Optimized Mean Estimation using Diverse Auxiliary Information under Except Extreme Ranked Set Sampling: Analysis and Application with Simulated and Real Data</em>. Accepted @ <strong>STATISTICS IN TRANSITION new series</strong>, 2026.
                </li>
              </ul>

              <div className="font-bold text-[11px] text-stone-800 pt-2">Conference Presentations:</div>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-stone-700">
                <li>
                  <strong>Alok Kumar</strong> and R. R. Sinha. <em>Ratio-cum-Exponential Estimator for Mean Estimation under Ranked Set Sampling</em>. International Conference on Artificial Intelligence, Mathematical Science and Statistical Data Science (AIMSSDS-2026), Central University of South Bihar, Gaya, Bihar, India.
                </li>
                <li>
                  <strong>Alok Kumar</strong>, R. R. Sinha. <em>Enhanced Estimator for Population Mean Using Auxiliary Information under Ordered Sampling Design</em>. International Conference on Innovative Trends in Statistics, Optimization and Data Science (IC-ITSODS-2024), Kurukshetra University, Kurukshetra, Haryana, India.
                </li>
                <li>
                  R. R. Sinha, <strong>Alok Kumar</strong>. <em>Efficient Estimation of Mean Using Auxiliary Information Under Ranked Set Sampling</em>. International Conference on Modelling, Simulation and Optimization of Energy Systems (MSOES 2023), Canadian University Dubai, UAE.
                </li>
                <li>
                  R. R. Sinha, <strong>Alok Kumar</strong>. <em>Estimation of Population mean based on Information of Auxiliary Variable and Attribute using Ranked Set Sampling</em>. National Conference on Recent Advancements in Mathematical & Applied Sciences, 2023, Hans Raj Mahila Maha Vidyalaya, Jalandhar, Punjab, India.
                </li>
              </ul>
            </div>
          </div>

          {/* Awards & Teaching */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <h2 className="text-xs font-bold font-mono text-stone-800 uppercase tracking-wider border-b border-stone-300 pb-0.5">
                Awards & Honors
              </h2>
              <ul className="space-y-1 pt-1 text-xs text-stone-700">
                <li>• <strong>GATE-Statistics 2022</strong>: Achieved <strong>All India Rank 81 (AIR 81)</strong>.</li>
                <li>• <strong>Junior Research Fellowship (JRF)</strong>: NIT Jalandhar (2022 – 2025).</li>
                <li>• <strong>Senior Research Fellowship (SRF)</strong>: NIT Jalandhar (2025 – Present).</li>
              </ul>
            </div>

            <div className="space-y-1">
              <h2 className="text-xs font-bold font-mono text-stone-800 uppercase tracking-wider border-b border-stone-300 pb-0.5">
                Teaching Assistantship (2022 – Present)
              </h2>
              <p className="text-[11px] text-stone-700 leading-snug pt-1">
                Conducted tutorials and laboratory sessions for Graduate and Undergraduate students at NIT Jalandhar in:<br />
                <em>Engineering Mathematics-I, Engineering Mathematics-II, Probability Theory, Probability and Statistics, and R-Programming Lab.</em>
              </p>
            </div>
          </div>

          {/* Workshops & Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono text-stone-800 uppercase tracking-wider border-b border-stone-300 pb-0.5">
              Workshops, Courses & Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700 pt-1">
              <div>
                <strong>Workshops & Certifications:</strong>
                <ul className="list-disc list-inside space-y-0.5 text-[11px] pt-1">
                  <li>Mathematical Foundations of Machine Learning (NPTEL & IISc Bangalore)</li>
                  <li>Introduction to Statistical Learning Techniques (Indian Statistical Institute, Kolkata, 2024)</li>
                  <li>Econometric Analysis (NPTEL & Calcutta University)</li>
                  <li>Andrew Ng's Machine Learning (Coursera & Stanford)</li>
                </ul>
              </div>

              <div>
                <strong>Skills & Competencies:</strong>
                <ul className="space-y-0.5 text-[11px] pt-1">
                  <li><strong>Coding:</strong> R, Python (Basic), LaTeX, Markdown</li>
                  <li><strong>Tools:</strong> RStudio for IDE, Python for IDE, Visualization (ggplot2)</li>
                  <li><strong>Productivity:</strong> Word, Excel, PowerPoint, Overleaf</li>
                  <li><strong>Languages:</strong> English and Hindi (Strong reading, writing, and speaking competencies)</li>
                  <li><strong>Domain:</strong> Academic Research, Teaching, Training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
