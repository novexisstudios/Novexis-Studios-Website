import { ProjectCategory, ServiceCategory, CaseStudy, AgentItem, AutomationCardItem } from './types';

export const COLORS = {
  primary: '#050505',
  secondary: '#0070F3',
  accent: '#8B5CF6',
  highlight: '#E2E8F0',
};

export const BRAND_MESSAGING = {
  eyebrow: "AI SYSTEMS × SOFTWARE ENGINEERING",
  headlineMain: "BUILD SYSTEMS.",
  headlineSub: "ELIMINATE REPETITION.",
  brandStatement: "Novexis builds AI-powered business systems that automate operations, accelerate growth, connect your tools, and turn repetitive processes into scalable infrastructure.",
  corePromise: "We automate the work your team shouldn't be doing.",
  altSupporting: "We turn repetitive business processes into intelligent, autonomous systems.",
  heroSubtext: "Novexis builds AI-powered business systems that automate operations, connect your tools, and turn repetitive work into scalable infrastructure.",
  primaryCTA: "AUTOMATE YOUR BUSINESS",
  secondaryCTA: "EXPLORE OUR SYSTEMS",
  supportingLine: "AI AGENTS · WORKFLOW AUTOMATION · CUSTOM SOFTWARE · DATA SYSTEMS",
};

export const SERVICES: ServiceCategory[] = [
  {
    id: "01",
    title: "AI AUTOMATION",
    tagline: "AI-powered workflows that execute repetitive business processes with minimal human intervention.",
    items: [
      { name: "AI Agents", description: "Autonomous domain agents that perform lead research, outreach, support, and operations.", tags: ["LLM", "Multi-Agent", "Autonomy"] },
      { name: "Workflow Automation", description: "Event-driven automation orchestration linking your tech stack into self-executing loops.", tags: ["n8n", "Python", "Webhooks"] },
      { name: "Process Automation", description: "Eliminating manual data transfer, document handling, and task assignment across teams.", tags: ["ETL", "System Sync"] },
      { name: "RAG Systems", description: "Retrieval-Augmented Generation engines grounded strictly in your proprietary business data.", tags: ["Vector DB", "Embeddings"] },
      { name: "AI Decision Systems", description: "Rules-engine + LLM hybrid decision logic for automated lead scoring, routing, and approvals.", tags: ["Decision Logic", "Scoring"] },
      { name: "Human-in-the-Loop Workflows", description: "Automated pipelines designed with safety approval gates for high-stakes business actions.", tags: ["Approval Gates", "Safety"] },
    ]
  },
  {
    id: "02",
    title: "SOFTWARE ENGINEERING",
    tagline: "Reliable software infrastructure behind every serious automation system.",
    items: [
      { name: "SaaS Platforms", description: "Multi-tenant cloud platforms engineered for high concurrency, security, and global scale.", tags: ["React", "Node.js", "Cloud"] },
      { name: "Web Applications", description: "Architectural, highly performant web applications built with modern frameworks and strict type safety.", tags: ["Vite", "TypeScript", "Next.js"] },
      { name: "Internal Tools", description: "Custom dashboards and admin portals built specifically for your team's operational workflows.", tags: ["Admin", "Custom UI"] },
      { name: "APIs & Backend Systems", description: "High-throughput REST and GraphQL backend architectures serving as your resilient data foundation.", tags: ["REST", "GraphQL", "FastAPI"] },
      { name: "Databases & Architecture", description: "Scalable relational and vector database architectures optimized for low-latency query performance.", tags: ["PostgreSQL", "Pinecone", "Redis"] },
      { name: "Third-Party Integrations", description: "Custom middleware connecting legacy CRMs, ERPs, payment gateways, and communications.", tags: ["OAuth", "Webhooks", "SDKs"] },
    ]
  },
  {
    id: "03",
    title: "SALES & LEAD AUTOMATION",
    tagline: "Turn prospecting, qualification and follow-up into an automated revenue engine.",
    items: [
      { name: "Lead Discovery & Enrichment", description: "Automated scraping, verification, and enrichment of high-intent B2B prospect lists.", tags: ["Enrichment", "Scraping"] },
      { name: "AI Qualification", description: "Intelligent ICP evaluation filtering inbound leads before they touch sales reps.", tags: ["AI Scoring", "ICP Match"] },
      { name: "Personalized Outreach Engines", description: "Dynamic email and message generation tailored to prospect tech stacks and news.", tags: ["Personalization", "Outreach"] },
      { name: "Email & WhatsApp Automation", description: "Multi-channel sequence dispatching with real-time response sentiment detection.", tags: ["WhatsApp API", "SMTP"] },
      { name: "CRM Automation & Follow-Up", description: "Automated deal stage updates, meeting logging, and persistent follow-up triggers.", tags: ["HubSpot", "Salesforce"] },
    ]
  },
  {
    id: "04",
    title: "AI & DATA SYSTEMS",
    tagline: "Turn scattered business information into actionable intelligence.",
    items: [
      { name: "RAG & Knowledge Bases", description: "Centralized vector search across internal docs, SOPs, Notion, and Slack history.", tags: ["Knowledge Graph", "RAG"] },
      { name: "Data Pipelines & Sync", description: "Automated ETL pipelines connecting fragmented data silos into a single source of truth.", tags: ["ETL", "Data Lakes"] },
      { name: "Document Intelligence", description: "Automated OCR extraction, parsing, and classification of invoices, PDFs, and contracts.", tags: ["OCR", "Parsing"] },
      { name: "Automated Reporting", description: "Scheduled AI summaries and analytics dashboards delivered straight to Executive Slack or Inbox.", tags: ["Analytics", "BI"] },
    ]
  },
  {
    id: "05",
    title: "OPERATIONS AUTOMATION",
    tagline: "Remove repetitive administrative work from your team's daily operations.",
    items: [
      { name: "CRM & ERP Integration", description: "Seamless bidirectional synchronization between customer data and enterprise backend tools.", tags: ["ERP Sync", "CRM"] },
      { name: "Document Processing & Approvals", description: "Automated document generation, signing notifications, and multi-tier approval routing.", tags: ["E-Sign", "Workflows"] },
      { name: "Data Synchronization", description: "Real-time state sync across databases, internal tools, and third-party SaaS applications.", tags: ["State Sync", "Webhooks"] },
      { name: "Internal Operations Engines", description: "Automating onboarding, task dispatching, project creation, and team status reports.", tags: ["Ops Engine", "Alerts"] },
    ]
  },
  {
    id: "06",
    title: "DIGITAL EXPERIENCE",
    tagline: "Human-facing experiences that make the underlying system usable and memorable.",
    isSecondary: true,
    items: [
      { name: "UI/UX & Product Design", description: "Minimalist, system-first interface architecture designed for high usability and conversion.", tags: ["UI/UX", "Design Systems"] },
      { name: "Brand Systems & Web Design", description: "Architectural visual identities and sleek dark-mode web experiences built for technical authority.", tags: ["Branding", "Identity"] },
      { name: "Motion Design & Video Production", description: "Product walkthroughs, kinetic motion graphics, and cinema-grade visual assets.", tags: ["Motion", "CGI", "Video"] },
      { name: "3D & Creative Production", description: "High-fidelity 3D modeling, interactive WebGL assets, and product visualizations.", tags: ["3D", "WebGL", "Blender"] },
    ]
  }
];

export const AI_AGENTS: AgentItem[] = [
  {
    id: "agent-01",
    code: "AGENT-01",
    name: "RESEARCH AGENT",
    tagline: "Lead Intelligence & Qualification",
    description: "Finds, researches, enriches, and scores prospects automatically from web, LinkedIn, and corporate databases.",
    status: "ACTIVE",
    capabilities: ["Automated Web Scraping", "ICP Scoring Matrix", "Corporate Data Enrichment", "CRM Auto-Seeding"],
    latency: "< 800ms"
  },
  {
    id: "agent-02",
    code: "AGENT-02",
    name: "SALES AGENT",
    tagline: "Outreach & CRM Synchronization",
    description: "Personalizes outreach, manages multi-touch follow-ups, and logs interactions directly inside your CRM.",
    status: "ACTIVE",
    capabilities: ["Contextual Email Synthesis", "Sentiment Classification", "Multi-Channel Dispatch", "CRM Stage Updates"],
    latency: "< 1.2s"
  },
  {
    id: "agent-03",
    code: "AGENT-03",
    name: "SUPPORT AGENT",
    tagline: "Knowledge-Grounded Resolution",
    description: "Answers customer support queries 24/7 using your actual internal documentation and historical tickets.",
    status: "ACTIVE",
    capabilities: ["Vector Knowledge Lookup", "Multi-Turn Dialogue", "Escalation Triggers", "Ticket Auto-Closing"],
    latency: "< 450ms"
  },
  {
    id: "agent-04",
    code: "AGENT-04",
    name: "OPERATIONS AGENT",
    tagline: "Cross-Tool Workflow Execution",
    description: "Moves information between disparate software systems, dispatches tasks, and enforces internal SOPs.",
    status: "ACTIVE",
    capabilities: ["Cross-API Orchestration", "Document Ingestion", "Approval Dispatching", "Conflict Resolution"],
    latency: "< 600ms"
  },
  {
    id: "agent-05",
    code: "AGENT-05",
    name: "KNOWLEDGE AGENT",
    tagline: "Internal Document Intelligence",
    description: "Searches internal repositories, policies, and contracts to provide accurate, instant contextual answers.",
    status: "READY",
    capabilities: ["Semantic Search", "PDF / Doc Parsing", "Role-Based Access", "Source Citation"],
    latency: "< 350ms"
  },
  {
    id: "agent-06",
    code: "AGENT-06",
    name: "REPORTING AGENT",
    tagline: "Automated Performance Analytics",
    description: "Collects operational metrics across tools, analyzes trends, and generates automated executive reports.",
    status: "READY",
    capabilities: ["Multi-Source Aggregation", "Anomaly Detection", "Natural Language Summaries", "Slack / Email Dispatch"],
    latency: "< 900ms"
  }
];

export const AUTOMATION_CARDS: AutomationCardItem[] = [
  {
    id: "auto-01",
    title: "LEAD GENERATION",
    category: "Sales & Growth",
    trigger: "New lead form submitted or prospect list uploaded",
    flow: ["Find Prospect Data", "Enrich Tech Stack & News", "Score against ICP", "Route & Draft Email"],
    output: "Qualified lead in CRM with personalized outreach draft ready",
    estimatedTimeSaved: "15 hrs / week per SDR"
  },
  {
    id: "auto-02",
    title: "CUSTOMER SUPPORT",
    category: "Operations",
    trigger: "Support email, WhatsApp, or chat ticket received",
    flow: ["Receive Query", "Search RAG Knowledge Base", "Synthesize Answer", "Resolve or Escalate"],
    output: "Instant resolution sent or prioritized escalation ticket created",
    estimatedTimeSaved: "70% ticket volume automated"
  },
  {
    id: "auto-03",
    title: "CONTENT OPERATIONS",
    category: "Digital Experience",
    trigger: "Topic brief or product release update",
    flow: ["Research Source Material", "Generate Draft Assets", "Format for Platforms", "Schedule & Publish"],
    output: "Multi-channel content formatted and staged for review",
    estimatedTimeSaved: "20 hrs / month"
  },
  {
    id: "auto-04",
    title: "DOCUMENT PROCESSING",
    category: "Operations",
    trigger: "PDF invoice, contract, or form uploaded",
    flow: ["OCR & Text Extraction", "Classify Fields", "Validate against ERP", "Store & Notify"],
    output: "Parsed structured JSON pushed to database & finance software",
    estimatedTimeSaved: "90% manual data entry reduced"
  },
  {
    id: "auto-05",
    title: "SALES FOLLOW-UPS",
    category: "Sales & Growth",
    trigger: "Meeting completed or quote sent with no reply in 48h",
    flow: ["Qualify Deal Stage", "Personalize Follow-Up", "Send Sequence", "Update CRM Log"],
    output: "Zero cold prospects slipping through the cracks",
    estimatedTimeSaved: "10 hrs / week"
  },
  {
    id: "auto-06",
    title: "EXECUTIVE REPORTING",
    category: "Data Systems",
    trigger: "Weekly scheduled cron or manual trigger",
    flow: ["Collect Metrics across Stack", "Analyze Revenue & Latency", "Generate Executive Summary", "Deliver to Slack/Inbox"],
    output: "Polished automated weekly dashboard report",
    estimatedTimeSaved: "5 hrs / week"
  },
  {
    id: "auto-07",
    title: "INTERNAL OPERATIONS",
    category: "Operations",
    trigger: "New client signed or employee onboarded",
    flow: ["Trigger Provisioning", "Generate Contracts", "Notify Team via Slack", "Sync Database"],
    output: "Complete automated environment setup in < 60 seconds",
    estimatedTimeSaved: "4 hrs per onboarding"
  }
];

export const NOVEXIS_METHOD = [
  {
    step: "01",
    title: "MAP",
    subtitle: "Process & Bottleneck Audit",
    description: "We map your business workflows, identifying exactly where time, money, and information are being lost to manual work."
  },
  {
    step: "02",
    title: "ARCHITECT",
    subtitle: "System Design",
    description: "We design a custom automation architecture tailored to your existing software stack, security protocols, and business logic."
  },
  {
    step: "03",
    title: "ENGINEER",
    subtitle: "Development & Integration",
    description: "We build the AI agents, backend software, APIs, database connectors, and custom workflow engines required."
  },
  {
    step: "04",
    title: "DEPLOY",
    subtitle: "Live Integration",
    description: "We safely connect the automated system into your live environment with human-in-the-loop safety gates."
  },
  {
    step: "05",
    title: "OPTIMIZE",
    subtitle: "Monitoring & Refinement",
    description: "We continuously monitor system execution, latency, and accuracy, improving model prompts and workflow reliability."
  }
];

export const INITIAL_CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'Automated Lead Intelligence & Qualification Pipeline',
    slug: 'aura-network',
    category: ProjectCategory.AI_AUTOMATION,
    description: 'An autonomous AI pipeline that ingests B2B prospects, enriches corporate profiles, scores leads against ICP criteria, and dispatches hyper-personalized outreach.',
    problem: 'Sales team spent 25+ hours weekly manually researching company tech stacks, scraping contact emails, and writing custom outreach messages with low conversion rates.',
    system: 'Engineered an end-to-end multi-agent AI system with web scraping workers, Pinecone vector storage for company signals, and automated CRM auto-sync.',
    stack: ['Python', 'n8n', 'OpenAI API', 'HubSpot API', 'PostgreSQL', 'TypeScript'],
    outcome: 'Leads automatically researched and enriched within 30 seconds; sales team response velocity increased by 4x.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    published: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Enterprise Knowledge RAG & Support Operations Engine',
    slug: 'kinetic-motion',
    category: ProjectCategory.DATA_SYSTEMS,
    description: 'A secure RAG knowledge hub indexing thousands of internal technical documents, SOPs, and support tickets for instant team query resolution.',
    problem: 'Customer support reps were overwhelmed by repetitive technical queries, leading to 14-hour response delays and fragmented documentation spread across Notion and Slack.',
    system: 'Built an enterprise vector search engine with multi-turn AI support agents and human escalation approval gates.',
    stack: ['Vector DB', 'FastAPI', 'LangChain', 'React', 'Slack Webhooks'],
    outcome: '72% of routine support queries resolved autonomously with instant context citations.',
    imageUrl: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=1200',
    published: true,
    createdAt: new Date().toISOString()
  }
];

export const INTEGRATIONS = [
  { name: "CRM", tools: ["HubSpot", "Salesforce", "Pipedrive", "Zohocrm"] },
  { name: "EMAIL", tools: ["Gmail", "Outlook", "Resend", "SendGrid"] },
  { name: "COMMUNICATION", tools: ["WhatsApp Business API", "Slack", "Discord", "Telegram"] },
  { name: "WORKSPACE", tools: ["Google Workspace", "Notion", "Airtable", "Microsoft 365"] },
  { name: "ERP & FINANCE", tools: ["Stripe", "QuickBooks", "Xero", "Custom ERPs"] },
  { name: "DATABASES", tools: ["PostgreSQL", "MongoDB", "Redis", "Pinecone"] },
  { name: "AI MODELS", tools: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro", "DeepSeek"] },
  { name: "APIs & CLOUD", tools: ["AWS", "Google Cloud", "Vercel", "Webhooks"] },
];