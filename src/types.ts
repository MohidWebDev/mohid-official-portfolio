export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
  featured?: boolean;
}

export interface TechItem {
  name: string;
  highlight?: boolean;
}

export interface TechCategory {
  id: string;
  title: string;
  icon: "monitor" | "server" | "database" | "wrench";
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "code" | "briefcase" | "mail";
}

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}
