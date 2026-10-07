export interface ResearchMethodology {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  problem: string;
  solution: string;
  impactMetric: string;
  venue: string;
  doi?: string;
  technologies: string[];
  formula: string;
  steps: {
    title: string;
    description: string;
  }[];
}

export interface SkillGroup {
  id: string;
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    badge?: string;
    context: string;
  }[];
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string;
  venue: string;
  publisher: string;
  year: string;
  type: 'journal' | 'conference';
  status: 'Published' | 'Accepted' | 'Presented';
  doi?: string;
  location?: string;
  abstract: string;
  bibtex: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  institution: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: {
    title: string;
    metric?: string;
    description: string;
    skills: string[];
  }[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  thesis?: string;
  cgpa: string;
  highlights: string[];
}

export interface WorkshopItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  type: string;
  description: string;
  keyTakeaway: string;
  tags: string[];
}

export const ACADEMIC_DATA: {
  personal: {
    name: string;
    title: string;
    affiliation: string;
    summary: string;
    status: string;
    email: string;
    linkedin: string;
    linkedinHandle: string;
    researchGate: string;
    googleScholar: string;
    location: string;
  };
  keyMetrics: {
    id: string;
    value: string;
    label: string;
    detail: string;
    category: string;
  }[];
  researchInterests: {
    title: string;
    description: string;
    icon: string;
  }[];
  methodologies: ResearchMethodology[];
  publications: PublicationItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skillsData: SkillGroup[];
  workshops: WorkshopItem[];
  awards: {
    id: string;
    title: string;
    year: string;
    badge: string;
    issuer: string;
    description: string;
  }[];
  scholarBotFaq: {
    keywords: string[];
    answer: string;
  }[];
} = {
  personal: {
    name: "Alok Kumar",
    title: "Ph.D. Research Scholar — Statistics & Statistical Learning Theory",
    affiliation: "Dr B R Ambedkar National Institute of Technology (NIT), Jalandhar ",
    summary: "",
    status: "Senior Research Fellow @ NIT Jalandhar • Open for Academic & Postdoc Discussions",
    email: "stalokpatwa@gmail.com",
    linkedin: "https://www.linkedin.com/in/alokpatwa/",
    linkedinHandle: "alokpatwa",
    researchGate: "https://www.researchgate.net/profile/Alok-Kumar-226?ev=hdr_xprf",
    googleScholar: "https://scholar.google.com/citations?user=WtDmUdAAAAAJ&hl=en&oi=sra",
    location: "Jalandhar, Punjab, India",
  },

  keyMetrics: [
    {
      id: "gate-rank",
      value: "AIR 81",
      label: "GATE Statistics Rank",
      detail: "All India Rank 81 in nationwide Graduate Aptitude Test in Engineering (Statistics 2022)",
      category: "National Exam",
    },
    {
      id: "phd-cgpa",
      value: "8.80",
      label: "Coursework (Math & Computing)",
      detail: "Ph.D. Coursework in Mathematics and Computing at Dr. B R Ambedkar NIT Jalandhar (8.80 CGPA)",
      category: "Academic Excellence",
    },
    {
      id: "journal-papers",
      value: "3",
      label: "Springer Journal Articles",
      detail: "Peer-reviewed papers in Applied Math, J. Stat Theory & Practice, and NASL",
      category: "Publications",
    },
    {
      id: "conf-papers",
      value: "3",
      label: "Conference Presentations",
      detail: "International and National talks across India and Canadian Univ Dubai (UAE)",
      category: "Presentations",
    },
    {
      id: "teaching-courses",
      value: "6+",
      label: "Courses Taught / Assisted",
      detail: "Statistics, probability, and mathematics instruction for graduate and undergraduate learners",
      category: "Teaching",
    },
    {
      id: "efficiency-gain",
      value: "180%",
      label: "Relative Efficiency Gain",
      detail: "Improvement in estimator efficiency over classical designs for selected sampling schemes",
      category: "Research Gain",
    },
  ],

  researchInterests: [
    {
      title: "Sampling Techniques & Survey Methodology",
      description: "Advanced sampling designs including Ranked Set Sampling (RSS), Rational Ranking, Extreme Outlier-resistant schemas (REERSS), and optimal sample allocation.",
      icon: "TrendingUp",
    },
    {
      title: "Statistical Inference & Estimation Theory",
      description: "Derivation of optimal estimators using single and dual auxiliary variables and attributes, minimizing Mean Squared Error (MSE) and ensuring asymptotic unbiasedness.",
      icon: "Sigma",
    },
    {
      title: "Uncertainty Quantification in AI & ML",
      description: "Quantifying aleatoric and epistemic uncertainty in deep learning and statistical learning models to guarantee robustness, calibrated confidence, and interpretability in critical decisions.",
      icon: "ShieldAlert",
    },
    {
      title: "Computational Statistics & Monte Carlo",
      description: "High-dimensional simulations in R and Python to benchmark empirical relative efficiencies, mean squared errors, and convergence under non-normal and contaminated distributions.",
      icon: "Binary",
    },
    {
      title: "Machine Learning & Random Forests",
      description: "Statistical learning theory applied to tree ensembles, ensemble classification, feature importance ranking, and econometric modeling.",
      icon: "Brain",
    },
    {
      title: "Econometric & Regression Modeling",
      description: "Multiple regression, dummy variable modeling, heteroscedasticity remediation, multicollinearity diagnostics, and time-series parameter estimations.",
      icon: "LineChart",
    },
  ],

  methodologies: [
    {
      id: "dual-optimal-auxiliary",
      title: "Dual Optimal Auxiliary Information for Mean Estimation",
      subtitle: "Rational ranking mechanism combining continuous auxiliary variables & attributes",
      badge: "Springer Applied Mathematics 2025",
      venue: "Applied Mathematics—A Journal of Chinese Universities (Springer)",
      problem: "Traditional population mean estimators suffer from elevated variance when only a single auxiliary variable is used or when auxiliary ranking is imperfect due to non-linear correlations.",
      solution: "Engineered a dual-auxiliary rational ranking estimator that simultaneously leverages optimal auxiliary variable measurements and qualitative attributes, establishing closed-form MSE minimizers.",
      impactMetric: "Up to 180% Percentage Relative Efficiency (PRE) over classical sample mean",
      technologies: ["Ranked Set Sampling", "Dual Auxiliary Variables", "MSE Optimization", "R / Monte Carlo", "Applied Mathematics"],
      formula: "\\bar{y}_{DRSS} = \\bar{y}_{(r)} + \\alpha_1(\\bar{x}_1 - \\bar{X}_1) + \\alpha_2(\\bar{x}_2 - \\bar{X}_2) \\quad \\text{where } \\text{MSE}(\\bar{y}_{DRSS}) < \\text{MSE}(\\bar{y}_{SRS})",
      steps: [
        {
          title: "Bivariate Auxiliary Stratification",
          description: "Select independent random sets from the finite population and rank study units based on auxiliary variable X and discrete attribute A.",
        },
        {
          title: "Rational Ranking Formulation",
          description: "Incorporate dual optimal weights (alpha_1, alpha_2) derived via Taylor series expansion to eliminate first-order asymptotic bias.",
        },
        {
          title: "Minimum Variance Derivation",
          description: "Analytically solve the constrained optimization problem to identify optimum scalar parameters that minimize asymptotic Mean Squared Error.",
        },
        {
          title: "Monte Carlo Empirical Validation",
          description: "Simulate 50,000 runs across normal, skewed, and real-world agricultural/demographic datasets in RStudio to verify theoretical PRE gains.",
        },
      ],
    },
    {
      id: "rational-ranked-set-sampling",
      title: "Optimal Rational Ranked Set Sampling (RRSS)",
      subtitle: "Accuracy enhancement in population parameter estimation",
      badge: "J. Statistical Theory & Practice 2026",
      venue: "Journal of Statistical Theory and Practice (Springer)",
      doi: "10.1007/s42519-025-00530-7",
      problem: "In environmental and agricultural field trials, measuring the primary study variable is expensive and destructive, while auxiliary attributes can be obtained easily but suffer from imperfect ranking errors.",
      solution: "Developed an optimal rational ranked set sampling (RRSS) strategy that dynamically adjusts sampling allocation based on auxiliary correlation coefficients.",
      impactMetric: "Published with DOI: 10.1007/s42519-025-00530-7 (Springer)",
      technologies: ["Rational Ranking", "Asymptotic Efficiency", "Survey Methodology", "ggplot2", "Statistical Inference"],
      formula: "\\hat{\\mu}_{RRSS} = \\sum_{i=1}^k w_i Y_{[i](i)} \\quad \\text{s.t. } \\sum w_i = 1, \\; \\text{Var}(\\hat{\\mu}_{RRSS}) \\ll \\text{Var}(\\bar{y}_{RSS})",
      steps: [
        {
          title: "Correlation-Aware Allocation",
          description: "Assign rational ranking weights proportional to the auxiliary correlation coefficient rho(X, Y) to mitigate ranking error propagation.",
        },
        {
          title: "Bias-Corrected Estimator Construction",
          description: "Formulate unbiased ratio-cum-product estimators combining rational ranked set items with population auxiliary means.",
        },
        {
          title: "Asymptotic Normality Proofs",
          description: "Establish central limit theorem bounds and asymptotic variance expressions under large-sample sampling frameworks.",
        },
        {
          title: "Real-world Benchmark Application",
          description: "Apply estimator to timber volume and environmental pollutant datasets, proving significant variance shrinkage.",
        },
      ],
    },
    {
      id: "reerss-outlier-mitigation",
      title: "Robust Except Extreme Ranked Set Sampling (REERSS)",
      subtitle: "Extreme outlier mitigation in heavy-tailed statistical data",
      badge: "National Academy Science Letters 2026",
      venue: "National Academy Science Letters (Springer)",
      problem: "Real-world survey samples are frequently contaminated with extreme outliers and heavy-tailed noise, severely distorting classical RSS estimators.",
      solution: "Formulated the Robust Except Extreme Ranked Set Sampling (REERSS) mechanism that systematically suppresses extreme order statistics while preserving interior distribution metrics.",
      impactMetric: "Over 60% reduction in Mean Squared Error under contaminated distributions",
      technologies: ["Robust Statistics", "Outlier Mitigation", "Heavy-tailed Distributions", "Order Statistics", "Springer NASL"],
      formula: "T_{REERSS} = \\frac{1}{m(k-2)} \\sum_{j=1}^m \\sum_{i=2}^{k-1} Y_{(i)j} \\quad \\text{(Extreme ranks } i=1,k \\text{ trimmed)}",
      steps: [
        {
          title: "Extreme Order Isolation",
          description: "Partition sample sets and isolate extreme order statistics (minima and maxima) that exhibit vulnerability to contamination.",
        },
        {
          title: "Adaptive Truncation & Weighting",
          description: "Construct a robust weighting matrix that down-weights extreme observations while maintaining unbiasedness through auxiliary calibration.",
        },
        {
          title: "Influence Function Analysis",
          description: "Compute breakdown points and influence functions to prove theoretical robustness against gross errors.",
        },
        {
          title: "Simulation Under Contamination Models",
          description: "Test across Gaussian mixture distributions with 10%-20% contamination, demonstrating steady MSE stability.",
        },
      ],
    },
    {
      id: "uncertainty-quantification-ml",
      title: "Uncertainty Quantification in AI & ML Models",
      subtitle: "Enhancing robustness, interpretability & trustworthiness in complex decision systems",
      badge: "Ongoing Research Initiative",
      venue: "Interdisciplinary Research NIT Jalandhar & IISc NPTEL",
      problem: "Modern machine learning models produce overconfident predictions when encountering out-of-distribution (OOD) samples or noisy real-world data.",
      solution: "Synthesizing classical statistical estimation theory, conformal prediction, and Random Forest ensemble variance to calibrate predictive uncertainties.",
      impactMetric: "Calibrated prediction intervals with rigorous statistical coverage guarantees",
      technologies: ["Uncertainty Quantification", "Conformal Prediction", "Random Forest", "Python (PyTorch / Scikit-learn)", "Statistical Learning"],
      formula: "P(Y_{n+1} \\in \\hat{C}(X_{n+1})) \\ge 1 - \\alpha \\quad \\text{for non-conformity score } S_i = |Y_i - \\hat{\\mu}(X_i)|",
      steps: [
        {
          title: "Ensemble Variance Deconstruction",
          description: "Deconstruct total predictive variance into epistemic (model uncertainty) and aleatoric (data noise) components.",
        },
        {
          title: "Conformal Prediction Calibration",
          description: "Apply distribution-free conformal inference to produce valid prediction intervals with finite-sample coverage guarantees.",
        },
        {
          title: "Out-of-Distribution Detection",
          description: "Leverage auxiliary statistical distance metrics (Mahalanobis / Wasserstein) to flag high-uncertainty decisions.",
        },
        {
          title: "Domain Adaptation Testing",
          description: "Validate framework on critical real-world healthcare and engineering sensor classification datasets.",
        },
      ],
    },
  ],

  publications: [
    {
      id: "pub-1",
      title: "An Improved Approach with Rational Ranking for Mean Estimation Using Dual Optimal Auxiliary Information",
      authors: "R. R. Sinha, Alok Kumar",
      venue: "Applied Mathematics—A Journal of Chinese Universities",
      publisher: "Springer Nature",
      year: "2025",
      type: "journal",
      status: "Accepted",
      abstract: "This paper proposes a novel class of estimators for finite population mean using dual optimal auxiliary information in rational ranked set sampling. Theoretical properties including bias and Mean Squared Error (MSE) equations are derived to first-order approximation. Simulation experiments confirm substantial efficiency gains over standard estimators under diverse correlation structures.",
      bibtex: `@article{sinha2025improved,
  author    = {Sinha, R. R. and Kumar, Alok},
  title     = {An Improved Approach with Rational Ranking for Mean Estimation Using Dual Optimal Auxiliary Information},
  journal   = {Applied Mathematics---A Journal of Chinese Universities},
  publisher = {Springer},
  year      = {2025},
  note      = {Accepted for publication}
}`,
      tags: ["Ranked Set Sampling", "Dual Auxiliary Information", "Rational Ranking", "Mean Estimation"],
    },
    {
      id: "pub-2",
      title: "Enhancing Mean Estimation Accuracy Through Optimal Auxiliary Information in Rational Ranked Set Sampling",
      authors: "Alok Kumar, R. R. Sinha",
      venue: "Journal of Statistical Theory and Practice",
      publisher: "Springer Nature",
      year: "2026",
      type: "journal",
      status: "Published",
      doi: "10.1007/s42519-025-00530-7",
      abstract: "Develops an enhanced mathematical estimation strategy under rational ranked set sampling utilizing optimal auxiliary information. Closed-form mathematical conditions for superiority over traditional estimators are established. Empirical performance is illustrated through extensive Monte Carlo simulations and real-life data applications.",
      bibtex: `@article{kumar2026enhancing,
  author    = {Kumar, Alok and Sinha, R. R.},
  title     = {Enhancing Mean Estimation Accuracy Through Optimal Auxiliary Information in Rational Ranked Set Sampling},
  journal   = {Journal of Statistical Theory and Practice},
  publisher = {Springer},
  volume    = {20},
  year      = {2026},
  doi       = {10.1007/s42519-025-00530-7}
}`,
      tags: ["Optimal Auxiliary Information", "Rational Ranked Set Sampling", "Monte Carlo Simulation", "Estimation of Population Mean"],
    },
    {
      id: "pub-3",
      title: "Optimized Mean Estimation using Diverse Auxiliary Information under Except Extreme Ranked Set Sampling: Analysis and Application with Simulated and Real Data",
      authors: "Alok Kumar, R. R. Sinha, Gajendra K. Vishwakarma",
      venue: "STATISTICS IN TRANSITION new series",
      publisher: "Statistics Poland",
      year: "2026",
      type: "journal",
      status: "Accepted",
      abstract: "This paper investigates mean estimation under Except Extreme Ranked Set Sampling using diverse auxiliary information, with analysis based on both simulated and real data to study efficiency and practical performance.",
      bibtex: `@article{kumar2026optimized,
  author    = {Kumar, Alok and Sinha, R. R. and Vishwakarma, Gajendra K.},
  title     = {Optimized Mean Estimation using Diverse Auxiliary Information under Except Extreme Ranked Set Sampling: Analysis and Application with Simulated and Real Data},
  journal   = {Statistics in Transition new series},
  publisher = {Statistics Poland},
  year      = {2026},
  note      = {Accepted}
}`,
      tags: ["Auxiliary Information", "Except Extreme Ranked Set Sampling", "Mean Estimation", "Simulation", "Real Data"],
    },
    {
      id: "pub-4",
      title: "Robust Except Extreme Ranked Set Sampling (REERSS): An Approach to Outlier Mitigation",
      authors: "R. R. Sinha, Alok Kumar",
      venue: "National Academy Science Letters",
      publisher: "Springer Nature",
      year: "2026",
      type: "journal",
      status: "Published",
      doi: "https://doi.org/10.1007/s40009-026-02174-y",
      abstract: "Introduces the REERSS sampling paradigm tailored specifically to counter the adverse effects of heavy-tailed noise and extreme outliers in survey sampling.",
      bibtex: `@article{sinha2026robust,
  author    = {Sinha, R. R. and Kumar, Alok},
  title     = {Robust Except Extreme Ranked Set Sampling (REERSS): An Approach to Outlier Mitigation},
  journal   = {National Academy Science Letters},
  publisher = {Springer},
  year      = {2026},
  doi       = {10.1007/s40009-026-02174-y}
}`,
      tags: ["Robust Ranked Set Sampling Design", "Robust Statistics", "Outlier Mitigation", "Heavy-tailed Distributions"],
    },
    {
      id: "pub-conf-1",
      title: "Enhanced Estimator for Population Mean Using Auxiliary Information under Ordered Sampling Design",
      authors: "Alok Kumar, R. R. Sinha",
      venue: "International Conference on Innovative Trends in Statistics, Optimization and Data Science (IC-ITSODS-2024)",
      publisher: "Kurukshetra University",
      year: "2024",
      type: "conference",
      status: "Presented",
      location: "Kurukshetra University, Haryana, India",
      abstract: "Presented an ordered sampling estimation framework utilizing auxiliary variables to improve parameter estimation precision in high-dimensional and non-standard survey designs.",
      bibtex: `@inproceedings{kumar2024enhanced,
  author    = {Kumar, Alok and Sinha, R. R.},
  title     = {Enhanced Estimator for Population Mean Using Auxiliary Information under Ordered Sampling Design},
  booktitle = {Proc. of International Conference on Innovative Trends in Statistics, Optimization and Data Science (IC-ITSODS-2024)},
  year      = {2024},
  address   = {Kurukshetra University, Kurukshetra, Haryana}
}`,
      tags: ["Ordered Sampling", "Auxiliary Variable", "Estimation of Mean"],
    },
    {
      id: "pub-conf-2",
      title: "Efficient Estimation of Mean Using Auxiliary Information Under Ranked Set Sampling",
      authors: "R. R. Sinha, Alok Kumar",
      venue: "International Conference on Modelling, Simulation and Optimization of Energy Systems (MSOES 2023)",
      publisher: "Canadian University Dubai",
      year: "2023",
      type: "conference",
      status: "Presented",
      location: "Canadian University Dubai, United Arab Emirates (UAE)",
      abstract: "Discussed mathematical derivations and computational simulation workflows of ranked set estimators applied to energy system modeling and parameter estimation under uncertainty.",
      bibtex: `@inproceedings{sinha2023efficient,
  author    = {Sinha, R. R. and Kumar, Alok},
  title     = {Efficient Estimation of Mean Using Auxiliary Information Under Ranked Set Sampling},
  booktitle = {Proc. of International Conference on Modelling, Simulation and Optimization of Energy Systems (MSOES 2023)},
  year      = {2023},
  address   = {Canadian University Dubai, UAE}
}`,
      tags: ["Ranked Set Sampling", "Optimization",  "Estimation of Mean" ],
    },
    {
      id: "pub-conf-3",
      title: "Estimation of Population mean based on Information of Auxiliary Variable and Attribute using Ranked Set Sampling",
      authors: "R. R. Sinha, Alok Kumar",
      venue: "National Conference on Recent Advancements in Mathematical & Applied Sciences",
      publisher: "Hans Raj Mahila Maha Vidyalaya",
      year: "2023",
      type: "conference",
      status: "Presented",
      location: "Hans Raj Mahila Maha Vidyalaya, Jalandhar, Punjab, India",
      abstract: "Explores the concurrent integration of continuous auxiliary metrics with qualitative categorical attributes to optimize ranked set sampling accuracy in domestic survey applications.",
      bibtex: `@inproceedings{sinha2023estimation,
  author    = {Sinha, R. R. and Kumar, Alok},
  title     = {Estimation of Population mean based on Information of Auxiliary Variable and Attribute using Ranked Set Sampling},
  booktitle = {Proc. of National Conference on Recent Advancements in Mathematical & Applied Sciences},
  year      = {2023},
  address   = {Jalandhar, Punjab}
}`,
      tags: ["Auxiliary Attributes", "Sampling Design",  "Estimation of Mean"],
    },
    {
      id: "pub-conf-4",
      title: "Ratio-cum-Exponential Estimator for Mean Estimation under Ranked Set Sampling",
      authors: "Alok Kumar and R. R. Sinha",
      venue: "International Conference on Artificial Intelligence, Mathematical Science and Statistical Data Science (AIMSSDS-2026)",
      publisher: "School of Mathematics, Statistics and Computer Science",
      year: "2026",
      type: "conference",
      status: "Presented",
      location: "Central University of South Bihar, Gaya, Bihar, India",
      abstract: "Presented a ratio-cum-exponential estimator for mean estimation under ranked set sampling, emphasizing analytical robustness and modern statistical data science applications.",
      bibtex: `@inproceedings{kumar2026ratio,
  author    = {Kumar, Alok and Sinha, R. R.},
  title     = {Ratio-cum-Exponential Estimator for Mean Estimation under Ranked Set Sampling},
  booktitle = {Proc. of International Conference on Artificial Intelligence, Mathematical Science and Statistical Data Science (AIMSSDS-2026)},
  year      = {2026},
  address   = {Central University of South Bihar, Gaya}
}`,
      tags: ["Ranked Set Sampling", "Ratio-cum-Exponential Estimator",  "Estimation of Mean"],
    },
  ],

  experience: [
    {
      id: "exp-srf",
      institution: "Dr B R Ambedkar National Institute of Technology (NIT), Jalandhar",
      role: "Senior Research Fellow (Ph.D. Scholar)",
      period: "2022 – Present",
      location: "Jalandhar, Punjab, India",
      description: "Conducting advanced doctoral research in statistical estimation theory, ranked set sampling, survey sampling, robust estimation, and auxiliary information, with emphasis on developing efficient and theoretically justified estimators for finite population inference. The work involves theoretical derivations, asymptotic analysis, statistical computing, real data applications, Monte Carlo simulation and preparation of research manuscripts for peer-reviewed statistical journals.",
      highlights: [],
    },
    {
      id: "exp-ta",
      institution: "Dr B R Ambedkar National Institute of Technology, Jalandhar (NITJ)",
      role: "Graduate Teaching Assistant (TA)",
      period: "2022 – Present",
      location: "Jalandhar, Punjab, India",
      description: "- Assisted in teaching Engineering Mathematics I & II, covering calculus, differential and integral calculus, matrices, vector calculus, and related mathematical methods.\n- Conducted tutorials and practical sessions for Probability Theory and Probability & Statistics, covering probability distributions, random variables, statistical inference, and applied statistical methods.\n- Taught R Programming, providing hands-on training in data manipulation, statistical analysis, visualization, simulation, and implementation of statistical techniques.\n- Developed and evaluated assignments, laboratory exercises, and practical assessments, and provided academic guidance and individualized support to students.\n- Assisted students in translating theoretical statistical concepts into computational and data-driven applications using R.",
      highlights: [],
    },
  ],

  education: [
    {
      id: "edu-phd",
      institution: "Dr B R Ambedkar National Institute of Technology (NIT), Jalandhar, Punjab, India ",
      degree: "Ph.D. in Statistics",
      period: "2022 – Present",
      location: "Jalandhar, Punjab, India",
      thesis: "Improved Estimation of Population Parameters using Auxiliary Information under Ranked Set Sampling",
      cgpa: "8.80 / 10.0",
      highlights: [
        "Specialization in Estimation of Parameters, Sampling Survey, Order Statistics (Ranked Set Sampling) and Robust Estimation",
        "Graduate Teaching Assistant (TA) for Engineering Mathematics-I & II, Probability Theory, Probability & Statistics and R Programming",
        "Experience in course instruction, laboratory teaching, statistical computing, assignment development and student mentoring",
        "Journal Reviewer: Peer reviewer for international journals in Statistics and Applied Statistics, evaluating manuscripts for methodological soundness, theoretical contributions, computational analysis, and statistical interpretation",
      ],
    },
    {
      id: "edu-msc",
      institution: "Banaras Hindu University (BHU), Varanasi, Uttar Pradesh, India",
      degree: "M.Sc. Statistics and Computing",
      period: "2018 – 2020",
      location: "Varanasi, Uttar Pradesh, India",
      thesis: "Applying Random Forest Algorithm for Classification",
      cgpa: "8.38 / 10.0",
      highlights: [
        "Comprehensive Courses in Statistical Computing, Statistical Inference, Econometrics, Survival & Reliability Theory, Stochastic Processes, SAS Programming, and R Programming",
        "Dissertation focused on Random Forest Ensemble architectures and performance tuning",
        "Rigorous coursework in computational programming using R and SAS, with emphasis on data manipulation, statistical modeling, and algorithmic implementation",
      ],
    },
    {
      id: "edu-bsc",
      institution: "Central University of Rajasthan (CURaj), Ajmer, Rajasthan, India",
      degree: "B.Sc. Statistics",
      period: "2015 – 2018",
      location: "Ajmer, Rajasthan, India",
      cgpa: "8.04 / 10.0",
      highlights: [
        "Core subjects: Statistics, Computer Science, Economics, and Mathematics",
        "Completed interdisciplinary coursework in Statistics (Statistical Inference, Probability Theory, Sample Survey, Design of Experiments, Reliability and Survival Analysis, Time Series, Statistical Process Control), Mathematics (Real Analysis, Calculus, Vector Calculus and Matrices, Numerical Methods), Economics (Microeconomics, Macroeconomics, Mathematical Methods in Economics), and Computer Science (Data Structures, Database Management Systems, C/C++ Programming, Computer Fundamentals)",
        "Graduated with First Class with Distinction",
      ],
    },
  ],

  skillsData: [
    {
      id: "statistical-inference",
      category: "Statistical Theory & Inference",
      iconName: "Sigma",
      description: "Advanced mathematical statistics, estimation theory, and survey sampling design.",
      skills: [

  { 
    name: "Estimation of Population Parameters", 
    badge: "Core Ph.D.", 
    context: "Ranked Set Sampling, Ordered Sampling Designs" 
  },

  { 
    name: "Survey Sampling Methodology", 
    badge: "Advanced", 
    context: "Simple Random Sampling, Stratification, Ranked Set Sampling, Adaptive Sampling, etc." 
  },

  { 
    name: "Robust Statistics & Outlier Mitigation", 
    badge: "Innovative", 
    context: "Breakdown Analysis, Influence Functions, Heavy-Tailed Data" 
  },

  { 
    name: "Asymptotic Theory & CLT", 
    badge: "Rigorous", 
    context: "Taylor Series Expansions, Asymptotic Unbiasedness & MSE Proofs" 
  },

  { 
    name: "Conformal Prediction & Uncertainty Quantification", 
    badge: "Emerging", 
    context: "Prediction Intervals, Distribution-Free Inference, Coverage Analysis" 
  },

  { 
    name: "Time-Series Modelling", 
    badge: "Advanced", 
    context: "Time-Series Analysis, Forecasting, Dependence Modelling, and Statistical Inference" 
  },

],
    },
    {
      id: "machine-learning",
      category: "Machine Learning & AI",
      iconName: "Brain",
      description: "Statistical learning theory, ensemble algorithms, and uncertainty quantification.",
      skills: [
        { name: "Uncertainty Quantification (UQ)", badge: "Research Focus", context: "Epistemic/aleatoric variance decomposition, conformal prediction" },
        { name: "Random Forest & Ensembles", badge: "M.Sc. Thesis", context: "Bagging, out-of-bag error estimation, classification trees" },
        { name: "Statistical Learning Techniques", badge: "ISI Kolkata", context: "Supervised classification, model validation, cross-validation" },
        { name: "Econometric & Regression Modeling", badge: "NPTEL Certified", context: "Multiple regression, heteroscedasticity, multicollinearity" },
        { name: "Mathematical Foundations of Machine Learning", badge: "NPTEL Certified & IISc", context: "mathematical foundations of modern machine learning, including optimization geometry, matrix decompositions, statistical learning guarantees, and analytical reasoning for intelligent systems." },
        { name: "Model Trustworthiness & Calibration", badge: "Emerging", context: "Robust decision-making, confidence calibration, OOD detection" },
      ],
    },
    {
      id: "computational-tools",
      category: "Programming & Computation",
      iconName: "Code2",
      description: "Statistical software, programming languages, and reproducible research environments.",
      skills: [
        { name: "R Programming", badge: "Expert", context: "Simulation pipelines, statistical modelling, statistical testing, custom estimator modeling" },
        { name: "Python", badge: "Basic", context: "NumPy, SciPy, Pandas, Scikit-learn, basic PyTorch" },
        { name: "RStudio IDE", badge: "Daily Tool", context: "Development, debugging, and computational benchmarking" },
        { name: "Data Visualization (ggplot2)", badge: "Publication-grade", context: "High-resolution distribution plots, MSE comparative charts" },
        { name: "LaTeX & Overleaf", badge: "Authoring", context: "Mathematical typesetting for Springer / IEEE journals" },
      ],
    },
    {
      id: "academic-pedagogy",
      category: "Academic Pedagogy & Research",
      iconName: "GraduationCap",
      description: "University teaching, student mentoring, scientific communication, and peer review.",
      skills: [
        { name: "University Level Teaching", badge: "2022-Present", context: "Engineering Math I/II, Probability Theory, Probability & Statistics and R-Programming" },
        { name: "Scientific Writing & Publication", badge: "3+ Springer", context: "Journal manuscript preparation, referee response, peer review" },
        { name: "Conference Presentations", badge: "International", context: "Oral presentations at Dubai, Kurukshetra, and Jalandhar" },
        { name: "English & Hindi Fluency", badge: "Bilingual", context: "Strong reading, writing, and academic speaking competencies" },
        { name: "Research Mentorship", badge: "Active", context: "Mentoring graduate and undergraduate students in statistical projects" },
      ],
    },
  ],

  workshops: [
    {
      id: "ws-nptel-ml",
      title: "Mathematical Foundations of Machine Learning",
      organization: "NPTEL and IISc Bangalore",
      year: "2026",
      type: "Advanced National Certification",
      description: "Deep dive into the mathematical foundations of modern machine learning, including optimization geometry, matrix decompositions, statistical learning guarantees, and analytical reasoning for intelligent systems.",
      keyTakeaway: "Strengthened the mathematical rigor behind statistical machine learning and research-oriented model development.",
      tags: ["Machine Learning", "Mathematics", "IISc Bangalore", "NPTEL"],
    },
    {
      id: "ws-isi-kolkata",
      title: "Introduction to Statistical Learning Techniques",
      organization: "Indian Statistical Institute (ISI), Kolkata",
      year: "2024",
      type: "Specialized Workshop",
      description: "Intensive training at India's premier statistical institution focusing on advanced statistical learning methods, high-dimensional data analysis, and hands-on implementations in R and Python.",
      keyTakeaway: "Applied complex learning techniques to real-world datasets with industry-standard statistical software.",
      tags: ["ISI Kolkata", "Statistical Learning", "R & Python", "Workshop"],
    },
    {
      id: "ws-econometrics",
      title: "Econometric Analysis",
      organization: "NPTEL / Calcutta University",
      year: "2019",
      type: "Master's Specialization",
      description: "Proctored qualification covering multiple regression, dummy variables, outlier detection, heteroscedasticity, autocorrelation, and multicollinearity remediation.",
      keyTakeaway: "Mastered diagnostic statistical testing and econometric parameter estimation.",
      tags: ["Econometrics", "Regression Analysis", "Calcutta University", "NPTEL"],
    },
    {
      id: "ws-andrew-ng",
      title: "Machine Learning by Andrew Ng",
      organization: "Coursera / Stanford Online",
      year: "2020",
      type: "Foundational Certification",
      description: "Comprehensive coverage of supervised learning, unsupervised learning, gradient descent optimization, cost functions, and neural network fundamentals.",
      keyTakeaway: "Solidified fundamental algorithmic understanding of machine learning implementations.",
      tags: ["Machine Learning", "Coursera", "Andrew Ng", "Algorithms"],
    },
  ],

  awards: [
    {
      id: "award-gate",
      title: "GATE (Graduate Aptitude Test in Engineering) — Statistics",
      year: "2022",
      badge: "All India Rank 81",
      issuer: "Ministry of Education / IITs",
      description: "Achieved All India Rank 81 (AIR 81) in Statistics, ranking in the premier national percentile of mathematical statisticians across India.",
    },
    {
      id: "award-srf",
      title: "Senior Research Fellowship (SRF)",
      year: "2022 – Present",
      badge: "National Fellowship",
      issuer: "NIT Jalandhar",
      description: "Awarded institutional research fellowship supporting doctoral research.",
    },
  ],

  scholarBotFaq: [
    {
      keywords: ["who", "about", "bio", "background", "profile"],
      answer: "Alok Kumar is a Senior Research Fellow and Ph.D. Scholar in Statistics at Dr. B R Ambedkar National Institute of Technology, Jalandhar (NITJ). He achieved All India Rank 81 in GATE Statistics (2022) and has authored 3 Springer peer-reviewed journal papers on Ranked Set Sampling, Rational Ranking, and Outlier Mitigation.",
    },
    {
      keywords: ["phd", "thesis", "research", "topic", "doctorate"],
      answer: "Alok's Ph.D. thesis at NIT Jalandhar is titled 'Improved Estimation of Population Parameters using Auxiliary Information under Ranked Set Sampling' (CGPA: 8.80). His research develops optimal mathematical estimators (RRSS, REERSS) that achieve higher efficiency than classical SRS while cutting estimation variance in real-world surveys.",
    },
    {
      keywords: ["publications", "papers", "journal", "springer", "doi"],
      answer: "Alok has 3 Springer journal papers: 1) 'An Improved Approach with Rational Ranking for Mean Estimation Using Dual Optimal Auxiliary Information' (Applied Mathematics, Springer 2025), 2) 'Enhancing Mean Estimation Accuracy Through Optimal Auxiliary Information in Rational Ranked Set Sampling' (Journal of Statistical Theory & Practice, Springer 2026, DOI: 10.1007/s42519-025-00530-7), and 3) 'Robust Except Extreme Ranked Set Sampling (REERSS): An Approach to Outlier Mitigation' (National Academy Science Letters, Springer 2026).",
    },
    {
      keywords: ["gate", "rank", "score", "achievement", "award"],
      answer: "In 2022, Alok Kumar achieved All India Rank 81 (AIR 81) in GATE Statistics, demonstrating elite national competency in mathematical statistics, probability theory, inference, and computational statistics.",
    },
    {
      keywords: ["teaching", "courses", "ta", "teaching assistant", "students"],
      answer: "As a Graduate Teaching Assistant at NIT Jalandhar since 2022, Alok conducts classroom tutorials and grading for: Engineering Mathematics-I, Engineering Mathematics-II, Probability Theory, and Probability & Statistics for undergraduate and postgraduate cohorts.",
    },
    {
      keywords: ["education", "degrees", "bhu", "curaj", "msc", "bsc"],
      answer: "Alok holds: 1) Ph.D. in Statistics (Pursuing, CGPA: 8.80) from NIT Jalandhar, 2) M.Sc. in Statistics and Computing (CGPA: 8.38) from Banaras Hindu University (BHU), and 3) B.Sc. in Statistics, Computer Science, Economics & Mathematics (CGPA: 8.04) from Central University of Rajasthan (CURaj).",
    },
    {
      keywords: ["skills", "tools", "languages", "r", "python", "ggplot2"],
      answer: "Alok specializes in R Programming, Python (NumPy, SciPy, Scikit-learn), RStudio, ggplot2 visualization, LaTeX/Overleaf, Ranked Set Sampling (RSS), Survey Methodology, Machine Learning (Random Forest, Uncertainty Quantification), and Econometrics.",
    },
    {
      keywords: ["workshops", "isi", "nptel", "andrew ng", "iisc"],
      answer: "Alok has completed advanced specialized training at: 1) Indian Statistical Institute (ISI), Kolkata (Statistical Learning Techniques 2024), 2) NPTEL / IISc Bangalore (Mathematical Foundations of ML), 3) NPTEL / Calcutta University (Econometric Analysis), and 4) Stanford / Coursera (Andrew Ng's Machine Learning).",
    },
    {
      keywords: ["contact", "email", "collaborate", "hire", "postdoc", "scholar"],
      answer: "You can reach Alok Kumar directly via email at stalokpatwa@gmail.com, connect on LinkedIn at linkedin.com/in/alokpatwa, or view his scholarly publications on Google Scholar and ResearchGate.",
    },
  ],
};
