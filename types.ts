export enum ProjectCategory {
  AI_AUTOMATION = "01 — AI Automation",
  SOFTWARE_ENGINEERING = "02 — Software Engineering",
  SALES_GROWTH = "03 — Sales & Lead Automation",
  DATA_SYSTEMS = "04 — AI & Data Systems",
  OPERATIONS = "05 — Operations Automation",
  DIGITAL_EXPERIENCE = "06 — Digital Experience",
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  categories?: ProjectCategory[];
  clientUrl?: string;
  description: string;
  problem: string;
  system: string;
  stack: string[];
  outcome: string;
  imageUrl: string;
  images?: string[];
  videoUrl?: string;
  videos?: string[];
  published: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface ServiceItem {
  name: string;
  description: string;
  tags?: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  items: ServiceItem[];
  isSecondary?: boolean;
}

export interface AgentItem {
  id: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  status: "ACTIVE" | "READY" | "STANDBY";
  capabilities: string[];
  latency: string;
}

export interface AutomationCardItem {
  id: string;
  title: string;
  category: string;
  trigger: string;
  flow: string[];
  output: string;
  estimatedTimeSaved: string;
}

export interface User {
  id: string;
  email: string;
  role: "admin" | "visitor";
}
