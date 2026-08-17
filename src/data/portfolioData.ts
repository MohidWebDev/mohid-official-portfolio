import { TechCategory, Project, ExperienceItem } from "../types";

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "monitor",
    skills: [
      "React / Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    skills: [
      "Node.js / Express",
      "JavaScript",
      "TypeScript",
      "REST APIs",
      "JWT / Auth",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "database",
    skills: ["MongoDB", "Mongoose", "Supabase (PostgreSQL)", "Firebase"],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    icon: "wrench",
    skills: [
      "Git & GitHub",
      "Vercel",
      "Postman",
      "VS Code",
      "Railway",
      "Render",
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "nexus-cloud",
    title: "Nexus Cloud Platform",
    description:
      "A scalable microservices orchestration platform designed for high-availability enterprise environments.",
    tags: ["React", "Node.js", "AWS"],
    liveUrl: "https://demo.architect.io/nexus",
    githubUrl: "https://github.com/architect/nexus-cloud",
    metrics: "99.99% uptime, 10M+ daily events processed",
  },
  {
    id: "quantum-ecommerce",
    title: "Quantum E-Commerce",
    description:
      "High-performance headless e-commerce solution with sub-second page loads and real-time inventory.",
    tags: ["Next.js", "GraphQL", "PostgreSQL"],
    liveUrl: "https://demo.architect.io/quantum",
    githubUrl: "https://github.com/architect/quantum-ecommerce",
    metrics: "350ms p95 latency, 45k concurrent users",
  },
  {
    id: "aegis-security",
    title: "Aegis Security Tool",
    description:
      "Automated vulnerability scanner and monitoring dashboard for modern web applications.",
    tags: ["Python", "Vue.js", "Docker"],
    liveUrl: "https://demo.architect.io/aegis",
    githubUrl: "https://github.com/architect/aegis-security",
    metrics: "Detected 12k+ CVEs across 500+ microservices",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "techcorp",
    role: "Senior Full-Stack Engineer",
    company: "TechCorp Inc.",
    period: "2021 - Present",
    description:
      "Lead architect for core microservices. Reduced deployment times by 40% through CI/CD pipeline optimizations and spearheaded the migration to a fully serverless architecture on AWS.",
    current: true,
  },
  {
    id: "creative-solutions",
    role: "Frontend Developer",
    company: "Creative Solutions LLC",
    period: "2018 - 2021",
    description:
      "Developed responsive, high-performance web interfaces using React and Redux. Collaborated closely with design teams to implement pixel-perfect, accessible UI components.",
  },
  {
    id: "university",
    role: "B.S. Computer Science",
    company: "University of Technology",
    period: "2014 - 2018",
    description:
      "Graduated with Honors. Specialized in Software Engineering and Distributed Systems. President of the University Coding Club.",
  },
];
