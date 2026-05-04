export const portfolioData = {
  name: "Chaitanya Khurana",
  role: "Technical Product Manager | AI & Data Orchestrator",
  email: "chaitanya100502@gmail.com",
  phone: "+91 7976989699",
  location: "India / Global",
  
  metrics: [
    { label: "AI Products Shipped", value: 3, suffix: "+" },
    { label: "Reduction in Loan Defaults", value: 20, suffix: "%" },
    { label: "Pre-launch Bug Resolution", value: 95, suffix: "%" },
    { label: "Experience", value: 3, suffix: "y" },
  ],

  projects: [
    {
      id: "loan-app",
      title: "ML Credit Scoring & Loan App",
      outcome: "20% Default Reduction",
      problem: "Loan evaluation needed a clearer application flow and smarter risk signals before approval decisions.",
      impact: "Built a loan workflow with ML-assisted credit scoring that reduced default rates by 20%.",
      approach: "Designed borrower intake, eligibility checks, scoring logic, and dashboards for decision visibility.",
      challenge: "Traditional rule-based credit models failed to capture non-linear risk patterns in borrower data. The system needed to flag high-risk applicants without over-rejecting borderline-safe profiles — a precision-recall balancing act with real financial consequences.",
      results: [
        { value: "20%", label: "Reduction in loan defaults" },
        { value: "87%", label: "Model precision on risk flags" },
        { value: "5 mins", label: "Avg. loan decision time" }
      ],
      highlights: [
        "Trained a gradient-boosted classifier on 15+ borrower features (income, tenure, debt ratio, repayment history) with SMOTE oversampling to handle class imbalance in default data.",
        "Designed a multi-stage eligibility funnel: document verification → income validation → risk score → officer review, with each stage producing a structured audit log.",
        "Built Flask API endpoints serving score predictions in real-time; integrated into a Power BI dashboard that surfaces approval confidence, risk band, and model reasoning for loan officers.",
        "Validated model fairness across borrower segments using group-level precision/recall analysis — ensuring the system didn't disproportionately reject profiles from specific income bands.",
        "Deployed the scoring service behind a rate-limited Flask API with input validation and error codes, making it callable by both the loan officer dashboard and a future mobile app layer."
      ],
      techStack: ["Python", "TensorFlow", "scikit-learn", "SQL", "Flask", "Pandas", "NumPy"],
      hardSkills: ["Predictive Modeling", "Risk Scoring", "Data Engineering", "Dashboarding"],
      softSkills: ["Product Strategy", "Fintech Domain Knowledge", "User Experience Design"],
      featured: true
    },
    {
      id: "raspberry-pi-chatbot",
      title: "Edge AI Chatbot on Raspberry Pi 5",
      outcome: "On-device AI Assistant",
      problem: "Teams needed a compact local assistant that could respond quickly without relying on cloud infrastructure.",
      impact: "Prototyped a fully offline Raspberry Pi 5 chatbot for lightweight on-device interaction and automation.",
      approach: "Combined Python services, prompt flows, and hardware-constrained deployment with a local LLM backend.",
      challenge: "Running a capable LLM on a Raspberry Pi 5's 8GB RAM with acceptable latency required aggressive model selection, 4-bit quantization, and a lean orchestration layer — with no GPU and no cloud fallback.",
      results: [
        { value: "<3s", label: "Response latency on-device" },
        { value: "4-bit", label: "Quantization for RAM fit" },
        { value: "100%", label: "Offline — zero cloud calls" }
      ],
      highlights: [
        "Selected Mistral 7B Q4_K_M via Ollama after benchmarking 4 models on Pi 5 hardware; it was the only model hitting the sub-3s p95 latency target with coherent multi-turn output.",
        "Built a LangChain orchestration layer with a conversation memory buffer — handles context windowing to stay within the 4096 token limit without truncating critical history.",
        "Exposed the assistant via a lightweight Flask API with a local React UI; packaged as a systemd service so it auto-starts on boot and recovers from crashes without manual intervention.",
        "Implemented a custom prompt template that enforces persona, response length limits, and fallback behavior — preventing the model from hallucinating capabilities or looping on ambiguous queries.",
        "Stress-tested the system with concurrent sessions using a Python load harness; identified memory ceiling at 2 parallel conversations and added request queuing to handle overflow gracefully."
      ],
      techStack: ["Python", "Raspberry Pi 5", "Ollama", "LangChain", "Flask", "Linux", "Shell Scripting"],
      hardSkills: ["RAG Pipelines", "LLM Deployment", "Hardware-Software Integration", "Prompt Engineering"],
      softSkills: ["Rapid Prototyping", "Technical Feasibility Study", "Resource Optimization"]
    },
    {
      id: "healthcare-bi-admin",
      title: "Healthcare Admin & BI Dashboard",
      outcome: "Unified Ops & Intelligence Platform",
      problem: "A healthcare firm needed admin workflows and leadership dashboards consolidated into one operational view.",
      impact: "Designed an admin system with BI dashboards that improved reporting cycles and leadership decision speed.",
      approach: "Mapped user roles, operational data views, KPI modules, and reporting screens for healthcare stakeholders.",
      challenge: "Healthcare data is siloed by department (ops, finance, clinical) and locked in incompatible schemas. Unifying it into a single BI layer without breaking HIPAA-adjacent privacy boundaries required careful ETL design and role-based data scoping.",
      results: [
        { value: "5 KPIs", label: "Automated in Power BI" },
        { value: "30%", label: "Faster leadership reporting" },
        { value: "3 roles", label: "Ops / Finance / Clinical" }
      ],
      highlights: [
        "Designed a unified SQL data model that joins patient intake, billing, and staff scheduling tables — using surrogate keys to anonymize patient identifiers before they reach the BI layer.",
        "Built 5 KPI modules (bed occupancy, avg. discharge time, billing cycle length, staff utilization, and cost-per-patient) with Power BI calculated measures and auto-refresh on a 4-hour schedule.",
        "Created role-scoped dashboard views: operations sees workflow bottlenecks, finance sees billing health, leadership sees org-wide performance — same data model, different access layers.",
        "Wrote a Python ETL pipeline that normalizes inconsistent date formats, fills missing values using department-level medians, and flags anomalous records for manual review before they enter the BI layer.",
        "Documented the entire data dictionary and KPI calculation logic in Confluence, enabling the client's internal team to own and extend the dashboards without depending on external support."
      ],
      techStack: ["Power BI", "SQL", "Python", "Figma", "REST APIs", "Excel"],
      hardSkills: ["Business Intelligence", "KPI Modeling", "Data Visualization", "ETL Process"],
      softSkills: ["Stakeholder Management", "Requirement Analysis", "Operational Workflow Design"]
    },
    {
      id: "healthcare-website",
      title: "Healthcare Firm Website",
      outcome: "Trust-first Web Presence",
      problem: "The firm needed a credible website making services, trust signals, and contact paths easy to understand.",
      impact: "Delivered a clean healthcare website focused on clarity, conversion, and professional brand presence.",
      approach: "Structured service pages, responsive layouts, contact flows, and calm visual hierarchy.",
      challenge: "Healthcare sites fail when they feel clinical and cold, but also fail when they feel too marketing-heavy. The design challenge was balancing warmth and authority — making a first-time visitor feel safe enough to book a consultation within one scroll.",
      results: [
        { value: "90+", label: "Lighthouse performance score" },
        { value: "1 scroll", label: "Conversion path to contact" },
        { value: "100%", label: "Responsive across breakpoints" }
      ],
      highlights: [
        "Structured a trust-first content hierarchy — hero credibility statement → service proof → patient testimonials → CTA — designed to reduce cognitive load and guide anxious users toward action.",
        "Implemented JSON-LD schema markup for MedicalOrganization and LocalBusiness types; this structured data is read by Google to generate rich results, directly cutting time-to-index.",
        "Achieved Lighthouse 90+ by lazy-loading below-fold images, deferring non-critical JS, and serving WebP assets — all without a CDN, using Vite's built-in optimization pipeline.",
        "Built a mobile-first Figma design system with a defined 4-color palette, two typefaces, and reusable component tokens — handed off to the client alongside a style guide for future updates.",
        "Implemented Framer Motion page transitions and scroll-triggered reveals to create a calm, reassuring feel — animation timing was deliberately slowed to 0.7s ease to match healthcare's need for composure over energy."
      ],
      techStack: ["React", "Tailwind CSS", "Figma", "Vite", "Framer Motion", "SEO"],
      hardSkills: ["Web Architecture", "SEO Optimization", "Responsive UI", "Performance Tuning"],
      softSkills: ["Brand Positioning", "UX Strategy", "Content Architecture"]
    },
    {
      id: "expense-insights",
      title: "Personal Expense Insights Dashboard",
      outcome: "Full Spending Visibility",
      problem: "Users often struggle to understand where their money goes across categories and recurring expenses.",
      impact: "Built a fintech dashboard categorizing expenses and highlighting monthly spending patterns.",
      approach: "Focused on readable charts, budget thresholds, and lightweight transaction tagging.",
      challenge: "Raw transaction data from bank exports is messy — inconsistent merchant names, mixed currencies, and ambiguous category signals. Accurate categorization required a hybrid rule-based + keyword-ML approach to hit useful precision without manual labeling at scale.",
      results: [
        { value: "10+", label: "Spending categories auto-tagged" },
        { value: "92%", label: "Categorization accuracy" },
        { value: "1 score", label: "Financial health at a glance" }
      ],
      highlights: [
        "Built a two-pass categorization engine: first pass applies regex rules for known merchants (Swiggy → Food, Amazon → Shopping); second pass runs a TF-IDF classifier trained on 2000 labeled transactions for ambiguous entries.",
        "Interactive Plotly charts update dynamically on category filter — monthly trend line, budget threshold bar, and anomaly flags (transactions >2σ from the monthly mean) rendered in a single view.",
        "Designed a 'Spending Health Score' (0–100) computed from budget adherence, savings rate, and recurring-expense ratio — gives users a single actionable number instead of 12 charts to interpret.",
        "Ingestion pipeline accepts CSV exports from 6 major Indian banks with different column schemas; a normalization layer maps them to a canonical transaction model before any processing begins.",
        "Added a 'recurring detection' module that identifies subscriptions and EMIs using interval analysis on merchant-amount pairs — flagging them separately so users can audit fixed commitments vs discretionary spend."
      ],
      techStack: ["Python", "Pandas", "Plotly", "SQL", "Streamlit", "Excel"],
      hardSkills: ["Financial Analytics", "Data Categorization", "Interactive Visuals"],
      softSkills: ["Self-service Dashboard Design", "Fintech Literacy"]
    },
    {
      id: "invoice-tracker",
      title: "Invoice & Payment Tracker",
      outcome: "Cleaner Cashflow Tracking",
      problem: "Small teams needed a basic way to track invoices, due dates, and payment status without full ERP tools.",
      impact: "Created a simple invoice tracker for receivables, reminders, and cashflow visibility.",
      approach: "Designed status states, aging buckets, due-date views, and export-friendly reports.",
      challenge: "Small teams don't want a complex ERP — they want the 20% of features that solve 80% of the pain. The product challenge was defining exactly which invoice states, filters, and export formats mattered, then building nothing else.",
      results: [
        { value: "5 states", label: "Invoice lifecycle stages" },
        { value: "1 click", label: "PDF export from live data" },
        { value: "JWT", label: "Multi-user auth, no data leak" }
      ],
      highlights: [
        "Modeled the invoice lifecycle as a strict state machine: Draft → Sent → Viewed → Partially Paid → Paid / Overdue — each transition is logged with a timestamp and user ID for a complete audit trail.",
        "PDF generation uses a print-optimized React component rendered server-side via Puppeteer — the output matches the on-screen invoice exactly, including logo, line items, tax breakdown, and payment terms.",
        "REST API built with Express + MongoDB; JWT middleware enforces tenant isolation so multi-user teams can share one instance without exposing each other's invoice data across authenticated routes.",
        "Aging bucket logic automatically flags invoices as 'At Risk' (30+ days) or 'Critical' (60+ days) and surfaces them at the top of the dashboard — no manual sorting required by the user.",
        "Designed an email reminder template system where overdue invoices trigger a pre-written follow-up draft (via mailto: link) pre-populated with client name, amount, and days overdue for one-click sending."
      ],
      techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "PDF Export", "REST API"],
      hardSkills: ["CRUD Operations", "State Management", "Document Export", "API Design"],
      softSkills: ["Operations Design", "User Flow Mapping", "Workflow Automation"]
    },
    {
      id: "emi-calculator",
      title: "EMI & Affordability Planner",
      outcome: "Smarter Loan Planning",
      problem: "Borrowers needed a quick way to compare tenure, interest, EMI, and affordability before applying.",
      impact: "Built a clear EMI planning tool that helps users compare scenarios before choosing a loan option.",
      approach: "Modeled EMI calculations, affordability bands, and simple scenario comparison logic.",
      challenge: "Most EMI calculators give a number with no context. The UX challenge was showing not just what the EMI is, but whether the user can actually afford it — and making that judgment feel helpful rather than judgmental.",
      results: [
        { value: "2 modes", label: "Reducing-balance & flat-rate" },
        { value: "Real-time", label: "Amortization chart updates" },
        { value: "40% rule", label: "Affordability warning threshold" }
      ],
      highlights: [
        "Implemented both reducing-balance and flat-rate EMI formulas side-by-side with a mode toggle — the difference in total interest paid between the two is surfaced clearly as a cost-of-credit comparison.",
        "Amortization schedule chart (Chart.js) re-renders on every slider change — principal vs. interest split across tenure is visualized as a stacked area chart so users see exactly how much goes to interest over time.",
        "Affordability band logic warns users when projected EMI exceeds 40% of stated take-home income (a standard FOIR threshold used by Indian lenders) — framed as guidance, not a blocker.",
        "Scenario comparison panel lets users pin up to 3 loan configurations (amount / tenure / rate combinations) and view them side-by-side in a table — total cost, monthly EMI, and break-even month all visible at once.",
        "All state (loan amount, tenure, rate, income) is serialized into URL query params on every change, making every scenario shareable via a single link — useful for users comparing options across devices."
      ],
      techStack: ["React", "JavaScript", "Tailwind CSS", "Chart.js", "Vite"],
      hardSkills: ["Financial Modeling", "Calculator Logic", "Dynamic Charting"],
      softSkills: ["UX Clarity", "Simple Logic Communication"]
    },
    {
      id: "portfolio-risk-lite",
      title: "Portfolio Risk Lite",
      outcome: "Instant Risk Snapshot",
      problem: "Beginner investors needed a simple overview of allocation risk without complex trading software.",
      impact: "Created a lightweight dashboard summarizing allocation, exposure, and basic risk signals.",
      approach: "Used simple asset grouping, visual summaries, and plain-language risk indicators.",
      challenge: "Quant risk metrics (Sharpe, VaR, beta) are meaningless to most retail investors without context. The challenge was computing them accurately from live data while translating the output into plain language that actually informs a decision.",
      results: [
        { value: "Live", label: "yfinance price data on refresh" },
        { value: "3 metrics", label: "Sharpe, Beta, VaR computed" },
        { value: "3 labels", label: "Low / Moderate / High risk" }
      ],
      highlights: [
        "Pulls live OHLCV data via yfinance on each session load; computes annualized Sharpe ratio, portfolio beta relative to NIFTY 50, and 95% Value-at-Risk using historical simulation on a 1-year lookback window.",
        "Correlation heatmap (Plotly) shows pairwise asset correlation across the portfolio — high-correlation clusters are highlighted in red, making concentration risk immediately visible to a non-expert user.",
        "Risk label engine maps computed metrics to plain-language tiers (Low / Moderate / High) using a weighted scoring function — Sharpe > 1, Beta < 0.8, and VaR < 5% together produce a 'Low Risk' label.",
        "Portfolio rebalancing suggestor compares current weights against a user-defined target allocation and outputs the exact buy/sell quantities needed to bring each position back within tolerance.",
        "Caching layer stores fetched price data for 15 minutes using session state — prevents redundant yfinance API calls on rapid re-renders and keeps the dashboard responsive during exploratory use."
      ],
      techStack: ["Python", "Streamlit", "Pandas", "Plotly", "yfinance", "NumPy"],
      hardSkills: ["Risk Metrics Calculation", "Data Aggregation", "Financial APIs"],
      softSkills: ["Strategic Insight Generation", "Investing Domain Knowledge"]
    }
  ],

  experience: [
    {
      role: "Product Manager & AI Developer",
      company: "Self-Employed (Freelance)",
      duration: "Jul 2024 – Present",
      summary: "End-to-end AI product delivery across independent engagements.",
      bullets: [
        "Shipped 3 AI products end-to-end within 6 weeks per engagement.",
        "Reduced manual reporting time by 30% through intelligent automation.",
        "Improved semantic search accuracy by 40% and engagement by 25% using RAG."
      ],
      techStack: ["Python", "LangChain", "OpenAI", "Flask", "Power BI", "Raspberry Pi"],
      hardSkills: ["RAG Pipelines", "Prompt Engineering", "CI/CD", "Computer Vision", "Embedded Systems"],
      softSkills: ["Product Roadmapping", "Client Management", "Agile Leadership", "Requirement Engineering"]
    },
    {
      role: "QA Engineer — Release & Product Quality",
      company: "Cyntexa",
      duration: "Feb 2024 – Jul 2024",
      summary: "Full QA ownership across CRM product releases.",
      bullets: [
        "Achieved 95% pre-launch issue resolution across CRM releases.",
        "Delivered 8+ feature releases with complete QA ownership.",
        "Translated client feedback into 12 shipped product enhancements."
      ],
      techStack: ["Salesforce", "Selenium", "JIRA", "Confluence", "Jenkins"],
      hardSkills: ["Test Automation", "CRM Lifecycle", "Regression Testing", "Performance Testing"],
      softSkills: ["Cross-functional Collaboration", "Stakeholder Communication", "Process Documentation"]
    },
    {
      role: "Data Scientist — Applied AI & Analytics",
      company: "Aru Technologies",
      duration: "Aug 2023 – Jan 2024",
      summary: "ML-driven analytics for financial risk and executive reporting.",
      bullets: [
        "Reduced loan default rates by 20% using a ML-based credit scoring system.",
        "Built an executive dashboard tracking 5 company-wide KPIs.",
        "Enabled weekly data-driven decision-making across leadership."
      ],
      techStack: ["Python", "TensorFlow", "SQL", "Power BI", "Excel"],
      hardSkills: ["Predictive Modeling", "Feature Engineering", "EDA", "Statistical Analysis"],
      softSkills: ["Data Storytelling", "Business Analysis", "Executive Presentation"]
    },
    {
      role: "Cloud Developer Intern",
      company: "Celebal Technologies",
      duration: "May 2023 – Jul 2023",
      summary: "Full-stack cloud infrastructure and microservices development.",
      bullets: [
        "Built a MERN + Azure microservices system end-to-end.",
        "Improved backend API performance by 22% through optimization.",
        "Resolved critical integration blockers ahead of production deadline."
      ],
      techStack: ["Node.js", "React", "Azure", "Docker", "MERN"],
      hardSkills: ["API Design", "Microservices", "Cloud Migration", "Backend CI/CD"],
      softSkills: ["Agile Development", "Technical Problem Solving", "System Architecture"]
    },
    {
      role: "Azure Cloud Intern",
      company: "Microsoft (Remote)",
      duration: "May 2022 – Aug 2022",
      summary: "Cloud infrastructure and DevOps pipeline optimization.",
      bullets: [
        "Reduced deployment time by 15% through CI/CD pipeline redesign.",
        "Authored incident retrospectives adopted as team-wide standard."
      ],
      techStack: ["Azure DevOps", "GitHub Actions", "Azure Functions"],
      hardSkills: ["Pipeline Optimization", "Cloud Computing Foundations", "DevOps Automation"],
      softSkills: ["Technical Research", "Standardization", "Collaborative Problem Solving"]
    }
  ],

  skills: {
    "Product & Business Strategy": [
      "Product Strategy & Vision", "KPI Design (North Star)", "A/B Testing & Experimentation",
      "Data-Driven Decision Making", "Customer Journey Mapping", "Product Analytics (Mixpanel/Amplitude)",
      "Pricing & Monetization Strategy", "Stakeholder Communication", "Structured Thinking (MECE)",
      "Documentation (PRDs/RFCs)", "Negotiation & Influence", "Product Discovery (Dual Track Agile)"
    ],
    "AI & Data Engineering": [
      "Feature Engineering", "Model Evaluation (Precision/Recall/F1)", "MLOps (Deployment & Monitoring)",
      "Vector Databases (FAISS/Pinecone)", "Embeddings & Similarity Search", "LLM Fine-tuning",
      "Prompt Optimization", "API Integration (OpenAI/HuggingFace)", "Experiment Tracking (MLflow)"
    ],
    "Data & Business Intelligence": [
      "Advanced SQL (Window Functions)", "Data Visualization (Tableau/Power BI)", "Dashboard Design",
      "Business Intelligence", "Data Storytelling", "Excel (Advanced/Pivot/Forecasting)",
      "Metrics Analysis", "Cohort Analysis", "ETL Pipelines"
    ],
    "Cloud & System Architecture": [
      "System Design (HL Architecture)", "Microservices Architecture", "REST API Design",
      "Authentication (JWT/OAuth)", "Kubernetes Foundations", "Infrastructure as Code (Terraform)",
      "Monitoring & Logging (Prometheus/Grafana)", "Scalability & Load Handling"
    ]
  },

  publications: [
    {
      title: "Review on Digital Watermarking Techniques and Its Retrieval",
      venue: "IEEE ICFIRTP 2022",
      doi: "10.1109/ICFIRTP56122.2022.10059440",
      href: "https://doi.org/10.1109/ICFIRTP56122.2022.10059440",
      year: "2022",
      type: "Conference Paper",
      publisher: "IEEE",
      coAuthors: "Co-authored",
      techStack: ["MATLAB", "Signal Processing Toolbox", "LaTeX"],
      hardSkills: ["Digital Watermarking", "Steganography", "Signal Processing", "Benchmarking"],
      softSkills: ["Academic Research", "Technical Writing", "Conference Presentation"],
      description: "Co-authored peer-reviewed research on security and privacy in digital watermarking; presented findings at an international conference. Covers spatial and frequency-domain embedding techniques, robustness evaluations, and retrieval performance benchmarks."
    }
  ],

  patents: [
    {
      title: "AI Based Smart Glasses for Determining Retinal Stress",
      authority: "Controller General of Patents, Designs & Trademarks, Government of India",
      status: "Published: Mar 2026",
      id: "Application No: 489030-001",
      href: "https://iprsearch.ipindia.gov.in/",
      year: "2026",
      type: "Design Patent",
      publisher: "Indian Patent Journal (03/2026)",
      coAuthors: "Co-inventor",
      techStack: ["Python", "OpenCV", "Embedded C"],
      hardSkills: ["Computer Vision", "Retinal Analysis", "Biomedical Engineering", "Edge AI"],
      softSkills: ["Intellectual Property Drafting", "Product Innovation", "R&D Leadership"],
      description: "Co-inventor of a registered design patent officially accepted and published in the Indian Patent Journal. The innovation applies AI-driven computer vision on an embedded wearable system to monitor and flag retinal stress indicators in real time."
    }
  ],
  certifications: [
    {
      title: "Microsoft Certified: Azure AI Engineer Associate",
      issuer: "Microsoft",
      year: "2025",
      id: "AI-102",
      vendor: "microsoft",
      logo: "/assets/logos/msft.png",
      foundation: "Azure AI Studio // OpenAI Orchestration",
      rationale: "Formalizing the ability to architect RAG pipelines and cognitive services at an enterprise scale, bridging the gap between raw LLMs and production-ready AI products.",
      competencies: ["Cognitive Search", "Vectorization", "Prompt Engineering", "Model Deployment"]
    },
    {
      title: "Generative AI Fundamentals",
      issuer: "Databricks",
      year: "2024",
      vendor: "databricks",
      logo: "/assets/logos/databricks.png",
      foundation: "Unity Catalog // Databricks Dolly // MLflow",
      rationale: "Mastering the Databricks Lakehouse architecture to scale Generative AI. Focuses on data-centric AI, model evaluation, and governance through Unity Catalog.",
      competencies: ["Lakehouse Architecture", "LLM Evaluation", "Feature Store", "Data Governance"]
    },
    {
      title: "Databricks Lakehouse Fundamentals",
      issuer: "Databricks",
      year: "2024",
      vendor: "databricks",
      logo: "/assets/logos/databricks.png",
      foundation: "Data Lakehouse // Delta Lake // Unity Catalog",
      rationale: "Mastering the unified management architecture that combines the performance of data warehouses with the flexibility of data lakes. Focuses on operational efficiency and data democratization.",
      competencies: ["Delta Lake Architecture", "Lakehouse Lifecycle", "Unifying Analytics", "Data Warehouse Convergence"]
    },
    {
      title: "Microsoft Fabric Analytics Engineer Associate",
      issuer: "Microsoft",
      year: "2024",
      id: "DP-600",
      vendor: "microsoft",
      logo: "/assets/logos/msft.png",
      foundation: "OneLake // Synapse // Power BI",
      rationale: "Orchestrating the end-to-end data lifecycle in a unified SaaS environment. Ensuring that data-to-decision latency is minimized through optimized Lakehouse patterns.",
      competencies: ["OneLake Governance", "Synapse Data Eng", "Real-time Intelligence", "DAX Optimization"]
    },
    {
      title: "Oracle Cloud Infrastructure Foundations",
      issuer: "Oracle",
      year: "2025",
      vendor: "oracle",
      logo: "/assets/logos/oracle.png",
      foundation: "OCI Gen 2 // IAM // VCN Design",
      rationale: "Ensuring cross-cloud operational resilience. Mastering OCI's core infrastructure primitives to build secure, scalable, and multi-cloud architectural foundations.",
      competencies: ["Cloud Security", "VCN Configuration", "Compute Architecture", "Storage Orchestration"]
    },
    {
      title: "Oracle Cloud Infrastructure Data Foundations",
      issuer: "Oracle",
      year: "2025",
      vendor: "oracle",
      logo: "/assets/logos/oracle.png",
      foundation: "Autonomous DB // ADW // Big Data",
      rationale: "Leveraging high-performance autonomous data systems. Focuses on automating data warehousing and analytics workflows to drive high-density business intelligence.",
      competencies: ["Autonomous Database", "Data Lake Integration", "OCI Analytics", "ETL Automation"]
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      university: "Rajasthan Technical University",
      location: "India",
      modules: ["Data Structures", "Cloud Computing", "ML/AI", "DBMS", "Java", "Linux", "UNIX", "System Design"],
      dissertation: "Developed a QR Code-based Medicine Inventory System for real-time retrieval of medicine details and purchase locations."
    }
  ]
};
