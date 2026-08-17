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
    id: "axcel",
    role: "MERN Stack Developer Intern",
    company: "AXCEL",
    period: "Jul 2026 - Present",
    description:
      "Contributing to hands-on development using the MERN stack (MongoDB, Express.js, React.js, Node.js) at AXCEL, a company delivering AI automation, web & mobile development, UI/UX design, CRM integrations, and cloud DevOps solutions. Strengthening full-stack skills through real-world, weekly project assignments.",
    current: true,
  },
  {
    id: "aj-codz",
    role: "MERN Stack Developer Intern",
    company: "AJ Codz",
    period: "Jun 2026 - Aug 2026",
    description:
      "Developed TurfKhana, a fully automated web application enabling users to book turfs seamlessly, handling both front-end and back-end functionality using the MERN stack to deliver a smooth, end-to-end booking experience.",
  },
  {
    id: "loftex",
    role: "SAP ABAP Intern",
    company: "Loftex Limited",
    period: "Aug 2023 - Sep 2023",
    description:
      "Gained hands-on exposure to SAP's ABAP programming environment at Loftex Limited, a textile industry company, including writing and handling table queries for data retrieval and reporting. Built a foundational understanding of ERP systems and how backend development supports large-scale industrial operations.",
  },
  {
    id: "university",
    role: "B.S. Computer Science",
    company: "University of Central Punjab (UCP)",
    period: "2022 - 2026",
    description:
      "Completed a Bachelor's degree in Computer Science with a focus on full-stack web development. Built practical experience through internships spanning ERP systems and modern MERN stack development.",
  },
];
