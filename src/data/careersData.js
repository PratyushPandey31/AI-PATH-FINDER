// NextStepAI - Careers Database

export const careersData = [
  {
    id: "full-stack-engineer",
    title: "Full Stack Engineer",
    category: "Technology",
    description: "Builds both the front-end (user interface) and back-end (database, server logic) of web applications. They are digital architects who turn code into functional online products.",
    salary: "$85,000 - $155,000",
    salaryTrend: [85, 98, 115, 135, 155],
    demand: "Very High (+25% growth)",
    tags: ["Remote Friendly", "High Paying", "In Demand"],
    skills: ["Coding", "Problem Solving", "Design", "Communication"],
    interests: ["Technology", "Creative Arts"],
    dayInLife: [
      { time: "09:00 AM", task: "Daily team standup and code review sync." },
      { time: "10:00 AM", task: "Debugging database bottlenecks and optimizing server queries." },
      { time: "12:30 PM", task: "Lunch & brief walk." },
      { time: "01:30 PM", task: "Developing new interactive components using React." },
      { time: "04:00 PM", task: "Writing unit tests and deploying code to staging environment." }
    ],
    roadmap: [
      {
        phase: "Phase 1: Foundations",
        title: "Web Core Fundamentals",
        description: "Master the building blocks of the web and learn the basics of computational thinking.",
        checklist: [
          "Learn HTML5 and CSS3 semantic layouts",
          "Understand CSS variables, Flexbox, and CSS Grid",
          "Master Javascript basics (Variables, Functions, ES6 syntax)",
          "Learn Git and Github version control basics"
        ]
      },
      {
        phase: "Phase 2: Frontend Mastery",
        title: "Interactive Frameworks",
        description: "Learn to build complex, responsive user interfaces using modern frontend libraries.",
        checklist: [
          "Master React fundamentals (State, Hooks, Component life cycle)",
          "Learn asynchronous Javascript & fetching API data",
          "Explore Tailwind CSS or styled components for efficient UI styling",
          "Build 3 responsive interactive frontend projects"
        ]
      },
      {
        phase: "Phase 3: Backend & Database",
        title: "Server-side Engineering",
        description: "Understand server architecture, database modeling, and API structure.",
        checklist: [
          "Learn Node.js and Express.js framework",
          "Understand Relational (PostgreSQL) vs. Non-Relational (MongoDB) databases",
          "Design and build RESTful APIs with authentication (JWT)",
          "Connect frontend app to your database and manage state"
        ]
      },
      {
        phase: "Phase 4: Deployment & Portfolio",
        title: "Cloud & Professional Launch",
        description: "Deploy applications to the cloud and prepare for entry-level technical interviews.",
        checklist: [
          "Deploy services using platforms like Vercel, Netlify, and Render",
          "Understand basic CI/CD deployment pipelines",
          "Build a portfolio website showcasing 3 full-stack projects",
          "Practice Data Structures & Algorithms and mock interviews"
        ]
      }
    ],
    resources: [
      { name: "MDN Web Docs (HTML/CSS/JS)", type: "Documentation", link: "https://developer.mozilla.org" },
      { name: "Full Stack Open (University of Helsinki)", type: "Course", link: "https://fullstackopen.com/en/" },
      { name: "The Odin Project", type: "Interactive Platform", link: "https://www.theodinproject.com/" }
    ]
  },
  {
    id: "cybersecurity-specialist",
    title: "Cybersecurity Specialist & Ethical Hacker",
    category: "Technology",
    description: "Protects organizational infrastructure, networks, and applications from cyber threats. They conduct vulnerability assessments, penetration testing, and design secure network fabrics to defend data assets.",
    salary: "$90,000 - $160,000",
    salaryTrend: [90, 105, 122, 140, 160],
    demand: "Extremely High (+32% growth)",
    tags: ["In Demand", "High Paying", "Critical Security"],
    skills: ["Coding", "Problem Solving", "Math/Analysis"],
    interests: ["Technology", "Science"],
    dayInLife: [
      { time: "08:30 AM", task: "Reviewing firewall logs and intrusion detection (IDS) alerts." },
      { time: "10:00 AM", task: "Executing a simulated network penetration test on a staging server." },
      { time: "12:00 PM", task: "Analyzing an anomalous spike in database connection queries." },
      { time: "02:00 PM", task: "Briefing software architects on secure API endpoint routing structures." },
      { time: "04:30 PM", task: "Drafting an incident response patch review report." }
    ],
    roadmap: [
      {
        phase: "Phase 1: Networking & Systems",
        title: "OS & Port Protocols",
        description: "Understand computer communication models, routing paths, and command line tools.",
        checklist: [
          "Master TCP/IP subnet models, ports, and DNS protocols",
          "Learn Linux system administration and Bash scripting",
          "Understand standard networking tools (Ping, Traceroute, Netstat)",
          "Get certified in CompTIA Network+ fundamentals"
        ]
      },
      {
        phase: "Phase 2: Security Core",
        title: "Vulnerabilities & Hardening",
        description: "Identify key system vulnerabilities and configure basic firewalls/encryption.",
        checklist: [
          "Study OWASP Top 10 web application vulnerabilities (SQL Injection, XSS, CSRF)",
          "Learn to scan ports and services using Nmap securely",
          "Understand encryption standards (AES, RSA, Public-Key Infrastructure)",
          "Study CompTIA Security+ concepts"
        ]
      },
      {
        phase: "Phase 3: Offense & Defense Lab",
        title: "Penetration Testing & Auditing",
        description: "Learn ethical hacking methodologies, exploit scripting, and malware analysis.",
        checklist: [
          "Practice offensive setups using Kali Linux tools",
          "Complete PortSwigger Web Security Academy labs",
          "Understand buffer overflows and write exploit scripts in Python",
          "Build labs on Hack The Box or TryHackMe to study live threats"
        ]
      },
      {
        phase: "Phase 4: Credentials & Launch",
        title: "Professional Hacking & Audits",
        description: "Earn advanced security certifications and perform enterprise compliance audits.",
        checklist: [
          "Prepare for and attempt the OSCP (Offensive Security Certified Professional)",
          "Learn security auditing guidelines (ISO 27001, SOC 2, NIST Framework)",
          "Draft 2 comprehensive mock network penetration test reports",
          "Practice capture the flag (CTF) events and prepare security briefs"
        ]
      }
    ],
    resources: [
      { name: "PortSwigger Web Security Academy (Free)", type: "Lab Platform", link: "https://portswigger.net/web-security" },
      { name: "TryHackMe Ethical Hacking Paths", type: "Interactive Labs", link: "https://tryhackme.com" },
      { name: "OWASP Top 10 Vulnerability Reference", type: "Reference Guide", link: "https://owasp.org/www-project-top-ten/" }
    ]
  },
  {
    id: "ux-ui-designer",
    title: "UX/UI Designer",
    category: "Creative Arts",
    description: "Designs the overall user journey and visual aesthetic of websites and mobile applications. They blend empathy, behavioral psychology, and artistic layout to make software intuitive and beautiful.",
    salary: "$70,000 - $130,000",
    salaryTrend: [70, 82, 98, 115, 130],
    demand: "High (+16% growth)",
    tags: ["Creative", "Remote Friendly", "Design-Centric"],
    skills: ["Design", "Problem Solving", "Communication", "Leadership"],
    interests: ["Creative Arts", "Technology"],
    dayInLife: [
      { time: "09:30 AM", task: "Reviewing feedback on interactive Figma prototypes." },
      { time: "11:00 AM", task: "Conducting user interview sessions to identify friction points in a checkout flow." },
      { time: "01:00 PM", task: "Creating layout wireframes and mood boards for a new landing page." },
      { time: "03:00 PM", task: "Handoff meeting with developers to align on micro-animations and CSS variables." },
      { time: "05:00 PM", task: "Updating the design system component library with new buttons and icons." }
    ],
    roadmap: [
      {
        phase: "Phase 1: Principles",
        title: "Design & UX Fundamentals",
        description: "Learn the core guidelines of visual design and psychological rules that govern interface usability.",
        checklist: [
          "Study visual principles: Typography, color theory, contrast, alignment",
          "Learn UX Laws (Fitts's Law, Jakob's Law, Hick's Law)",
          "Practice manual sketching and user journey mapping",
          "Understand difference between UI design and UX design research"
        ]
      },
      {
        phase: "Phase 2: Figma Mastery",
        title: "Vector Graphics & Interactive Prototyping",
        description: "Learn the industry standard tool for designing user interfaces.",
        checklist: [
          "Master Figma layout grids, shapes, and pen tool",
          "Understand Auto Layout, components, and variables in Figma",
          "Create interactive high-fidelity prototypes with smart-animate",
          "Re-design 3 popular applications to build visual skills"
        ]
      },
      {
        phase: "Phase 3: User Research & Testing",
        title: "Empathy & Validation",
        description: "Conduct surveys, analyze data, and run usability tests to justify design decisions.",
        checklist: [
          "Write user interview guides and document user personas",
          "Learn card sorting and information architecture design",
          "Run usability testing sessions and document design iterations",
          "Learn to perform competitive analysis of competitor products"
        ]
      },
      {
        phase: "Phase 4: Case Studies",
        title: "Portfolio Creation",
        description: "Assemble comprehensive studies showing how you solved problems from research to pixels.",
        checklist: [
          "Write 2-3 detailed case studies explaining design problems, research, iterations, and final mocks",
          "Build a portfolio website (Webflow, Framer, or custom code)",
          "Join design communities (Behance, Dribbble) for critique",
          "Practice portfolio presentation and whiteboard challenge skills"
        ]
      }
    ],
    resources: [
      { name: "Google UX Design Professional Certificate", type: "Course", link: "https://www.coursera.org/" },
      { name: "Laws of UX (Jon Yablonski)", type: "Book/Reference", link: "https://lawsofux.com" },
      { name: "Figma Interactive Tutorials", type: "Tutorial", link: "https://www.figma.com/resources/" }
    ]
  },
  {
    id: "ai-ml-engineer",
    title: "AI / Machine Learning Engineer",
    category: "Technology",
    description: "Develops algorithms and mathematical models that allow software to learn, analyze patterns, and make decisions without explicit programming. They build the engines behind LLMs, image generators, and autonomous systems.",
    salary: "$110,000 - $190,000",
    salaryTrend: [110, 130, 150, 172, 190],
    demand: "Extremely High (+40% growth)",
    tags: ["High Paying", "In Demand", "Math Intensive"],
    skills: ["Coding", "Problem Solving", "Math/Analysis"],
    interests: ["Technology", "Science"],
    dayInLife: [
      { time: "09:00 AM", task: "Reviewing training charts for a newly updated neural network model." },
      { time: "10:30 AM", task: "Data cleaning, filtering, and normalization using Pandas/NumPy." },
      { time: "01:00 PM", task: "Implementing an custom agent pipeline using LangChain/Gemini API." },
      { time: "03:30 PM", task: "Optimizing hyperparameters and training models on cloud GPU nodes." },
      { time: "05:00 PM", task: "Meeting with stakeholders to outline ethical boundaries of model deployment." }
    ],
    roadmap: [
      {
        phase: "Phase 1: Math & Python",
        title: "Mathematical Foundations",
        description: "Learn the language of AI: Linear algebra, calculus, and programming logic.",
        checklist: [
          "Learn Python programming (Variables, OOP, and data structures)",
          "Understand Linear Algebra (Matrices, Vectors, Eigenvalues)",
          "Master Calculus (Derivatives, gradients, chain rule)",
          "Study Probability & Statistics (Distributions, hypothesis testing)"
        ]
      },
      {
        phase: "Phase 2: Data Wrangling",
        title: "Data Libraries & Analysis",
        description: "Learn to process, visualize, and clean massive sets of raw data.",
        checklist: [
          "Master NumPy for numerical computations",
          "Master Pandas for dataset manipulation and cleaning",
          "Learn visualization libraries (Matplotlib, Seaborn)",
          "Understand SQL query logic for retrieving data"
        ]
      },
      {
        phase: "Phase 3: Core ML Algorithms",
        title: "Classical Machine Learning",
        description: "Build foundational predictive models and regression systems.",
        checklist: [
          "Learn Supervised Learning (Linear Regression, Decision Trees, SVMs)",
          "Learn Unsupervised Learning (K-Means Clustering, PCA)",
          "Understand evaluation metrics (Accuracy, Precision, Recall, F1)",
          "Build projects using Scikit-Learn library"
        ]
      },
      {
        phase: "Phase 4: Deep Learning & AI",
        title: "Neural Networks & Modern AI",
        description: "Build neural network architectures, train custom transformers, and deploy AI services.",
        checklist: [
          "Learn Neural Network fundamentals (Perceptrons, Backpropagation)",
          "Master PyTorch or TensorFlow for deep learning structures",
          "Learn Transformer architectures and NLP basics",
          "Learn prompt engineering, fine-tuning, and vector database retrieval (RAG)"
        ]
      }
    ],
    resources: [
      { name: "Machine Learning Specialization (Andrew Ng)", type: "Course", link: "https://www.coursera.org" },
      { name: "Kaggle Competitions & Datasets", type: "Practice Platform", link: "https://www.kaggle.com" },
      { name: "Fast.ai Practical Deep Learning", type: "Course", link: "https://www.fast.ai" }
    ]
  },
  {
    id: "bioinformatics-scientist",
    title: "Bioinformatics Scientist",
    category: "Science",
    description: "Combines biology, computer science, and data analysis to study complex biological systems. They write scripts to analyze genomic sequences, track diseases, and help discover life-saving medicines.",
    salary: "$80,000 - $145,000",
    salaryTrend: [80, 94, 110, 128, 145],
    demand: "High (+18% growth)",
    tags: ["Research Focused", "Impactful", "Interdisciplinary"],
    skills: ["Math/Analysis", "Coding", "Problem Solving"],
    interests: ["Science", "Technology"],
    dayInLife: [
      { time: "09:00 AM", task: "Reviewing raw DNA sequencer datasets." },
      { time: "10:30 AM", task: "Running an alignment script to search for mutations in gene variants." },
      { time: "12:00 PM", task: "Syncing with lab biologists to understand chemical trial boundaries." },
      { time: "02:00 PM", task: "Visualizing gene expression clusters using R scripts." },
      { time: "04:30 PM", task: "Drafting findings for a peer-reviewed research publication." }
    ],
    roadmap: [
      {
        phase: "Phase 1: Science & Scripts",
        title: "Biology & Bash Foundations",
        description: "Establish a solid baseline in molecular biology while learning shell scripting and command line skills.",
        checklist: [
          "Understand Genetics, DNA replication, and protein structures",
          "Learn Linux command line operations and Bash scripting",
          "Learn core Python programming specifically for string matching",
          "Study basic research methodology and library research databases"
        ]
      },
      {
        phase: "Phase 2: Bioinformatics Coding",
        title: "Specialized Scripting & Biopython",
        description: "Manipulate gene files and structural biological sequences programmatically.",
        checklist: [
          "Learn Biopython package for parsing genomic databases",
          "Understand file formats: FASTA, FASTQ, BAM, VCF",
          "Learn to use genomic alignment tools (BLAST, Bowtie)",
          "Practice downloading datasets from NCBI database"
        ]
      },
      {
        phase: "Phase 3: R & Statistics",
        title: "Statistical Bioinformatics",
        description: "Master biological statistics and data modeling to validate experimental results.",
        checklist: [
          "Learn R programming language",
          "Learn Bioconductor package ecosystem in R",
          "Master statistical testing (ANOVA, T-Tests, regression models)",
          "Build plots for gene expression clustering analysis"
        ]
      },
      {
        phase: "Phase 4: Advanced Systems",
        title: "Structural Genomics & Modeling",
        description: "Work on drug discovery and molecular 3D simulation platforms.",
        checklist: [
          "Learn basic structural biology and protein folding models",
          "Understand PyMOL or molecular docking simulators",
          "Contribute to an open-source biological research tool on Github",
          "Complete a research study or independent genomic analysis project"
        ]
      }
    ],
    resources: [
      { name: "Bioinformatics Specialization (UC San Diego)", type: "Course", link: "https://www.coursera.org" },
      { name: "Rosalind.info Bioinformatics Problems", type: "Practice", link: "https://rosalind.info" },
      { name: "Biopython Official Documentation", type: "Documentation", link: "https://biopython.org" }
    ]
  },
  {
    id: "quantitative-analyst",
    title: "Quantitative Analyst",
    category: "Business & Finance",
    description: "Designs mathematical models to predict market movements, manage financial risk, and automate trading strategies. They operate at the boundary of mathematics, finance, and software development.",
    salary: "$120,000 - $220,000",
    salaryTrend: [120, 145, 170, 195, 220],
    demand: "High (+12% growth)",
    tags: ["High Paying", "Math Intensive", "Fast Paced"],
    skills: ["Math/Analysis", "Coding", "Problem Solving", "Communication"],
    interests: ["Business & Finance", "Technology"],
    dayInLife: [
      { time: "08:00 AM", task: "Analyzing market opening ticks and server logs." },
      { time: "09:30 AM", task: "Refining a statistical arbitrage algorithm using Python." },
      { time: "11:00 AM", task: "Backtesting trading models against 10 years of historical data." },
      { time: "02:00 PM", task: "Meeting with risk officers to discuss extreme stress-test parameters." },
      { time: "04:30 PM", task: "Writing optimized C++ helpers for low-latency calculations." }
    ],
    roadmap: [
      {
        phase: "Phase 1: Mathematics",
        title: "Advanced Math Foundations",
        description: "Develop a rigorous understanding of stochastic calculus and probability.",
        checklist: [
          "Master Calculus (Multivariable, Differential Equations)",
          "Understand Probability and Random Processes",
          "Learn Linear Algebra (Decompositions, Matrices)",
          "Study Financial Markets basics (Stocks, Bonds, Derivatives)"
        ]
      },
      {
        phase: "Phase 2: Coding for Quants",
        title: "Scientific Programming",
        description: "Learn Python and C++ for model building and high speed computation.",
        checklist: [
          "Master Python (Pandas, NumPy, SciPy)",
          "Learn Object Oriented Programming in C++",
          "Understand Time Series analysis (ARMA, GARCH models)",
          "Learn SQL for querying large financial transactional databases"
        ]
      },
      {
        phase: "Phase 3: Financial Modeling",
        title: "Pricing & Risk Models",
        description: "Learn mathematical derivatives pricing and risk management structures.",
        checklist: [
          "Understand Black-Scholes model for option pricing",
          "Learn Monte Carlo simulations for price forecasting",
          "Understand Value-at-Risk (VaR) calculations",
          "Build backtesting engines for checking trading strategies"
        ]
      },
      {
        phase: "Phase 4: Algorithmic Systems",
        title: "Machine Learning & High Frequency",
        description: "Integrate machine learning into market predictions and understand order-book dynamics.",
        checklist: [
          "Apply machine learning regression to market price models",
          "Learn about Order Book dynamics and micro-structure",
          "Understand low-latency principles in high-frequency trading",
          "Create a complete backtested algorithmic trading portfolio project"
        ]
      }
    ],
    resources: [
      { name: "Options, Futures, and Other Derivatives (John Hull)", type: "Book", link: "https://www.google.com/search?q=John+Hull+Options+Futures" },
      { name: "WorldQuant University Financial Engineering", type: "Tuition-Free MSc", link: "https://www.wqu.edu/" },
      { name: "QuantStart Guide to Quantitative Finance", type: "Article/Guide", link: "https://www.quantstart.com" }
    ]
  },
  {
    id: "digital-marketing-strategist",
    title: "Digital Marketing Strategist",
    category: "Business & Finance",
    description: "Develops online campaign strategies to grow a brand's web presence. They analyze consumer behavior, coordinate graphic assets, manage advertising budgets, and write copy to convert leads into customers.",
    salary: "$55,000 - $110,000",
    salaryTrend: [55, 68, 82, 95, 110],
    demand: "Moderate (+10% growth)",
    tags: ["Creative", "Business Centric", "Dynamic"],
    skills: ["Communication", "Design", "Math/Analysis", "Leadership"],
    interests: ["Business & Finance", "Creative Arts"],
    dayInLife: [
      { time: "09:00 AM", task: "Reviewing dashboard metrics from Google Analytics and ad managers." },
      { time: "10:30 AM", task: "A/B testing ad copy variations for a social media campaign." },
      { time: "12:00 PM", task: "Brainstorming video content concepts with the creative team." },
      { time: "02:30 PM", task: "Allocating weekly digital advertising spend budgets." },
      { time: "04:30 PM", task: "Presenting conversion rate improvements to the brand CMO." }
    ],
    roadmap: [
      {
        phase: "Phase 1: Marketing Core",
        title: "Consumer Psychology & Funnels",
        description: "Learn how customers think and map the path from awareness to final purchase.",
        checklist: [
          "Understand the marketing funnel: Awareness, Consideration, Conversion",
          "Study basic copywriting rules and persuasive messaging",
          "Learn layout basics (spacing, hierarchy) for visual posts",
          "Understand target demographics and market segmentation"
        ]
      },
      {
        phase: "Phase 2: Channels & Content",
        title: "Search & Social Platforms",
        description: "Master organic search visibility, content planning, and social distribution channels.",
        checklist: [
          "Learn Search Engine Optimization (SEO) key terms and site audits",
          "Understand social platform mechanics (Instagram, YouTube, TikTok, LinkedIn)",
          "Learn content scheduling, planning, and creation workflows",
          "Understand email marketing structures and newsletter flows"
        ]
      },
      {
        phase: "Phase 3: Paid Ads & Analytics",
        title: "Data-Driven Marketing",
        description: "Manage advertising budgets and analyze analytics dashboards to calculate return on spend.",
        checklist: [
          "Learn Meta Ads Manager and Google Ads dashboard operations",
          "Master Google Analytics 4 (GA4) setup and event tracking",
          "Learn calculations: CPC, CAC, LTV, ROAS",
          "Practice setting up conversion pixels and landing page tests"
        ]
      },
      {
        phase: "Phase 4: Leadership & Strategy",
        title: "Campaign Management & Pitching",
        description: "Coordinate visual resources, design budgets, and pitch comprehensive marketing plans.",
        checklist: [
          "Learn to build visual pitch decks for creative proposals",
          "Master project management using tools like Trello, Asana, or ClickUp",
          "Understand agency pricing structures and vendor negotiation",
          "Design and execute a full mockup marketing campaign case study"
        ]
      }
    ],
    resources: [
      { name: "Google Digital Marketing & E-commerce Certificate", type: "Course", link: "https://www.coursera.org" },
      { name: "HubSpot Academy Free Courses", type: "Certifications", link: "https://academy.hubspot.com" },
      { name: "Growth Design Case Studies", type: "Interactive Case Studies", link: "https://growth.design" }
    ]
  },
  {
    id: "renewable-energy-engineer",
    title: "Renewable Energy Engineer",
    category: "Science",
    description: "Designs and installs green energy systems, such as solar arrays, wind turbines, and bio-energy networks. They focus on solving energy production problems while protecting environmental balance.",
    salary: "$75,000 - $135,000",
    salaryTrend: [75, 88, 102, 118, 135],
    demand: "Very High (+28% growth)",
    tags: ["Hands On", "Impactful", "In Demand"],
    skills: ["Problem Solving", "Math/Analysis", "Leadership"],
    interests: ["Science", "Technology"],
    dayInLife: [
      { time: "08:30 AM", task: "Reviewing topographic maps and wind velocity datasets." },
      { time: "10:00 AM", task: "Running simulation models to optimize solar panel placement angles." },
      { time: "12:00 PM", task: "Meeting safety inspectors on-site to audit a wind turbine assembly." },
      { time: "02:30 PM", task: "Drafting electrical integration blueprints using CAD software." },
      { time: "04:30 PM", task: "Checking battery storage efficiency levels in test cells." }
    ],
    roadmap: [
      {
        phase: "Phase 1: Engineering Physics",
        title: "Physics & Energy Basics",
        description: "Build core engineering capabilities in thermodynamics, physics, and electrical currents.",
        checklist: [
          "Master physics concepts: Thermodynamics, electricity, fluids",
          "Learn basics of solar photovoltaic (PV) and wind energy science",
          "Study standard math methods (algebra, trigonometry, calculus)",
          "Learn to read technical engineering blueprints and electrical schematics"
        ]
      },
      {
        phase: "Phase 2: CAD Design",
        title: "Computer Aided Design",
        description: "Learn to design structures and electrical loops using software model tools.",
        checklist: [
          "Learn AutoCAD or SolidWorks design software",
          "Design simple structural frame models for solar panel grids",
          "Learn simulation tools (PVsyst, RETScreen) to predict solar capture",
          "Study national electric codes and environmental compliance standards"
        ]
      },
      {
        phase: "Phase 3: Battery & Power Grid",
        title: "Energy Storage & Transmission",
        description: "Analyze power grids and battery technology to store and transmit generated electricity.",
        checklist: [
          "Understand battery chemistry (Lithium-ion, solid-state, flow batteries)",
          "Learn grid connection structures and transformer mechanics",
          "Study microgrid controls and smart energy dispatch systems",
          "Perform calculations on power capacity and line resistance loss"
        ]
      },
      {
        phase: "Phase 4: Site Operations",
        title: "Project Management & Safety",
        description: "Deploy large industrial wind and solar systems while keeping teams safe and projects on budget.",
        checklist: [
          "Learn industrial project management (scheduling, budget lines)",
          "Understand environmental impact assessments (EIA)",
          "Get certified in standard health and safety protocols (OSHA equivalent)",
          "Prepare case study of a commercial scale renewable installation"
        ]
      }
    ],
    resources: [
      { name: "NPTEL Renewable Energy Engineering", type: "Video Lectures", link: "https://nptel.ac.in" },
      { name: "RETScreen Clean Energy Management Software", type: "Software/Tutorial", link: "https://www.nrcan.gc.ca" },
      { name: "Solar Energy Engineering Certificate (Delftx)", type: "Course", link: "https://www.edx.org" }
    ]
  },
  {
    id: "technical-writer",
    title: "Technical Writer & Content Architect",
    category: "Writing & Humanities",
    description: "Takes complex technical systems, codes, and scientific procedures, and translates them into clear documentation, user guides, API manuals, and educational resources.",
    salary: "$60,000 - $115,000",
    salaryTrend: [60, 72, 85, 100, 115],
    demand: "Moderate (+12% growth)",
    tags: ["Remote Friendly", "Writing Focus", "Low Stress"],
    skills: ["Writing", "Communication", "Coding", "Design"],
    interests: ["Writing & Humanities", "Technology"],
    dayInLife: [
      { time: "09:00 AM", task: "Reviewing code changes to update an API endpoint developer guide." },
      { time: "10:30 AM", task: "Interviewing software developers to explain a complicated setup step." },
      { time: "01:00 PM", task: "Writing explanatory Markdown guides and configuring screenshots." },
      { time: "03:00 PM", task: "Formatting HTML templates and checking static site builder configurations." },
      { time: "04:30 PM", task: "Proofreading structural drafts and checking links for usability." }
    ],
    roadmap: [
      {
        phase: "Phase 1: Writing Core",
        title: "Clarity, Style, and Flow",
        description: "Develop structural precision in your writing, formatting documents for readable scanning.",
        checklist: [
          "Study technical style guides (Microsoft Style Guide, Google Dev Style)",
          "Learn active voice, clear definitions, and editing rules",
          "Master Markdown formatting syntax",
          "Learn basic layout visual principles for reader formatting"
        ]
      },
      {
        phase: "Phase 2: Tech Basics",
        title: "Coding & Command Line",
        description: "Learn to read and understand code to write documentation developers will trust.",
        checklist: [
          "Learn basic Javascript, Python, or HTML code blocks",
          "Understand Git branches, commits, and pull requests",
          "Learn to navigate files via Command Line prompts",
          "Understand API concepts: JSON formatting, endpoints, query parameters"
        ]
      },
      {
        phase: "Phase 3: Doc Engines",
        title: "Docs-as-Code & Generators",
        description: "Deploy documentation pages using static site builders and automated pipelines.",
        checklist: [
          "Learn Static Site Builders (Docusaurus, Jekyll, or MkDocs)",
          "Understand structuring site navigation and table of contents",
          "Learn to read OpenAPI / Swagger schemas to document APIs",
          "Study SEO optimization parameters for public help articles"
        ]
      },
      {
        phase: "Phase 4: Portfolio Development",
        title: "Case Studies & Samples",
        description: "Assemble documentation files, tutorials, and API manuals that demonstrate writing clarity.",
        checklist: [
          "Write 1 quick-start installation tutorial for an open-source tool",
          "Create 1 complete API reference documentation page",
          "Publish a clean documentation portfolio page using Docusaurus on GitHub Pages",
          "Review and copyedit existing open-source repository readme files"
        ]
      }
    ],
    resources: [
      { name: "Google technical Writing Courses (Free)", type: "Course", link: "https://developers.google.com/tech-writing" },
      { name: "Write the Docs Community", type: "Community", link: "https://www.writethedocs.org/" },
      { name: "Microsoft Style Guide", type: "Reference", link: "https://learn.microsoft.com/en-us/style-guide/" }
    ]
  }
];

// Helper to calculate best match careers based on user quiz responses
export function calculateMatches(answers) {
  const { interests = [], skills = [], workPrefs = [] } = answers;
  
  if (interests.length === 0 && skills.length === 0) {
    // Return default careers with 50-70% matches
    return careersData.map((career, index) => ({
      ...career,
      matchScore: 70 - index * 4
    }));
  }

  const scoredCareers = careersData.map(career => {
    let score = 30; // base score
    
    // Check interests overlap (Max 35 points)
    const matchedInterests = career.interests.filter(i => interests.includes(i));
    const interestRatio = career.interests.length > 0 
      ? matchedInterests.length / career.interests.length 
      : 0;
    score += interestRatio * 35;

    // Check skills overlap (Max 35 points)
    const matchedSkills = career.skills.filter(s => skills.includes(s));
    const skillRatio = career.skills.length > 0 
      ? matchedSkills.length / career.skills.length 
      : 0;
    score += skillRatio * 35;
    
    // Add minor adjustment for matching tags
    if (workPrefs.includes("Remote") && career.tags.includes("Remote Friendly")) {
      score += 5;
    }
    if (workPrefs.includes("High Salary") && career.tags.includes("High Paying")) {
      score += 5;
    }
    if (workPrefs.includes("Creative") && career.tags.includes("Creative")) {
      score += 5;
    }

    // Cap score at 98% (looks more realistic than 100%)
    const finalScore = Math.min(Math.round(score), 98);

    return {
      ...career,
      matchScore: finalScore
    };
  });

  // Sort by match score descending
  return scoredCareers.sort((a, b) => b.matchScore - a.matchScore);
}
