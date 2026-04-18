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
      title: "Loan App",
      outcome: "20% Default Reduction",
      problem: "Loan evaluation needed a clearer application flow and smarter risk signals before approval decisions.",
      impact: "Built a loan workflow with ML-assisted credit scoring that reduced default rates by 20%.",
      approach: "Designed borrower intake, eligibility checks, scoring logic, and dashboards for decision visibility.",
      tags: ["FinTech", "Credit Risk", "TensorFlow"],
      featured: true
    },
    {
      id: "raspberry-pi-chatbot",
      title: "Chatbot on Raspberry Pi 5",
      outcome: "Edge AI Assistant",
      problem: "Teams needed a compact local assistant that could respond quickly without relying on a full cloud setup.",
      impact: "Prototyped a Raspberry Pi 5 chatbot for lightweight on-device interaction and automation.",
      approach: "Combined Python services, prompt flows, and hardware-friendly deployment constraints.",
      tags: ["Raspberry Pi", "Python", "AI Assistant"]
    },
    {
      id: "healthcare-bi-admin",
      title: "Healthcare Admin & BI Dashboard",
      outcome: "Business Intelligence System",
      problem: "A healthcare firm needed admin workflows and leadership dashboards in one operational view.",
      impact: "Designed an admin system with BI dashboards for cleaner reporting and faster business review cycles.",
      approach: "Mapped roles, operational data views, KPI modules, and reporting screens for healthcare stakeholders.",
      tags: ["Healthcare", "BI Dashboard", "Admin System"]
    },
    {
      id: "healthcare-website",
      title: "Healthcare Firm Website",
      outcome: "Trust-first Web Presence",
      problem: "The firm needed a credible website that made services, trust signals, and contact paths easy to understand.",
      impact: "Created a clean healthcare website focused on clarity, conversion, and professional brand presence.",
      approach: "Structured service pages, responsive layouts, contact flows, and calm visual hierarchy.",
      tags: ["Healthcare", "Website", "UX"]
    },
    {
      id: "expense-insights",
      title: "Personal Expense Insights",
      outcome: "Spending Visibility",
      problem: "Users often struggle to understand where their money goes across categories and recurring expenses.",
      impact: "Built a simple fintech dashboard that categorizes expenses and highlights monthly spending patterns.",
      approach: "Focused on readable charts, budget thresholds, and lightweight transaction tagging.",
      tags: ["FinTech", "Dashboard", "Analytics"]
    },
    {
      id: "invoice-tracker",
      title: "Invoice & Payment Tracker",
      outcome: "Cleaner Cashflow Tracking",
      problem: "Small teams needed a basic way to track invoices, due dates, and payment status without complex ERP tools.",
      impact: "Created a simple invoice tracker for receivables, reminders, and cashflow visibility.",
      approach: "Designed status states, aging buckets, due-date views, and export-friendly reports.",
      tags: ["FinTech", "Payments", "Operations"]
    },
    {
      id: "emi-calculator",
      title: "EMI & Affordability Planner",
      outcome: "Loan Planning Utility",
      problem: "Borrowers needed a quick way to compare tenure, interest, EMI, and affordability before applying.",
      impact: "Built a clear EMI planning tool that helps users compare scenarios before choosing a loan option.",
      approach: "Modeled EMI calculations, affordability bands, and simple scenario comparison.",
      tags: ["FinTech", "Calculator", "UX"]
    },
    {
      id: "portfolio-risk-lite",
      title: "Portfolio Risk Lite",
      outcome: "Risk Snapshot",
      problem: "Beginner investors needed a simple overview of allocation risk without complex trading software.",
      impact: "Created a lightweight dashboard that summarizes allocation, exposure, and basic risk signals.",
      approach: "Used simple asset grouping, visual summaries, and plain-language risk indicators.",
      tags: ["FinTech", "Investing", "Dashboard"]
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
      tech: ["Python", "LangChain", "TensorFlow", "Flask", "Power BI", "Raspberry Pi"]
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
      tech: ["Salesforce", "Selenium", "JIRA"]
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
      tech: ["Python", "TensorFlow", "SQL", "Power BI"]
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
      tech: ["MERN", "Azure", "Docker"]
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
      tech: ["Azure DevOps", "GitHub Actions"]
    }
  ],

  skills: {
    "Product Leadership": [
      "Product Roadmapping", "PRDs & User Stories", "Agile/Scrum", "JIRA", "OKRs & KPI Tracking",
      "Feature Prioritization (RICE/MoSCoW)", "Stakeholder Management", "User Research & UAT", 
      "Go-to-Market Planning", "Cross-functional Leadership", "Release Management"
    ],
    "AI & Data Engineering": [
      "Python", "SQL", "Flask", "TensorFlow", "RAG / NLP / LLMs", "LangChain", "Prompt Engineering", 
      "Power BI", "Data Pipelines", "Notion"
    ],
    "Cloud & Ecosystem": [
      "Salesforce (Sales Cloud, Service Cloud, CPQ)", "Azure Cloud", "Docker", "CI/CD", "GitHub Actions", "Git"
    ]
  },

  publications: [
    {
      title: "Review on Digital Watermarking Techniques and Its Retrieval",
      venue: "IEEE ICFIRTP 2022",
      doi: "10.1109/ICFIRTP56122.2022.10059440",
      description: "Co-authored peer-reviewed research on security and privacy in digital watermarking; presented findings at an international conference."
    }
  ],

  patents: [
    {
      title: "Design Patent — AI BASED SMART GLASSES FOR DETERMINING RETINAL STRESS",
      authority: "Controller General of Patents, Designs & Trademarks, Government of India",
      status: "Published: Mar 2026",
      id: "Application No: 489030-001",
      description: "Co-inventor of a registered design patent officially accepted and published in the Indian Patent Journal (03/2026)."
    }
  ]
};
