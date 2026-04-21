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
