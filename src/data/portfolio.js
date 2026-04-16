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
      id: "ai-freetec",
      title: "Self-Employed (Freelance)",
      outcome: "3 AI Products Shipped",
      problem: "Startups needed rapid prototyping and deployment of production-ready AI agents within tight deadlines.",
      impact: "Delivered 3 end-to-end products in 6 week cycles, reducing manual reporting time by 30%.",
      approach: "Built scalable RAG architectures using LangChain and Flask, focusing on high-accuracy semantic search.",
      tags: ["AI Orchestration", "RAG", "Flask"],
      featured: true
    },
    {
      id: "credit-risk",
      title: "Aru Technologies",
      outcome: "20% Default Reduction",
      problem: "Financial legacy systems lacked predictive depth, leading to higher-than-average loan defaults.",
      impact: "Reduced loan default rates by 20% using a proprietary ML-based credit scoring system.",
      approach: "Engineered deep learning models using TensorFlow to analyze unconventional data points for creditworthiness.",
      tags: ["Machine Learning", "FinTech", "Analytics"]
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
