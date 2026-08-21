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
    id: "mediscan",
    title: "MediScan",
    description:
      "A machine learning-powered decision-support tool that predicts likely medical conditions from symptoms — submitted as text, a scanned image, or a PDF report — using OCR and NLP.",
    tags: ["Python", "Flask", "scikit-learn", "NLTK", "Tesseract OCR"],
    liveUrl: "https://mediscan-y531.onrender.com",
    githubUrl: "https://github.com/MohidWebDev/MediScan",
    metrics: "Predicts across 20 common conditions with confidence scoring",
  },
  {
    id: "movies-crud-app",
    title: "Movies CRUD App",
    description:
      "A full-stack movie management app with a REST API backend and a React frontend — browse, search, add, edit, and delete movies with poster uploads.",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://movies-crud-frontend.onrender.com",
    githubUrl: "https://github.com/MohidWebDev/movies-crud-frontend",
    metrics: "Full CRUD with image uploads, validation, and rate limiting",
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
    period: "Feb 2022 - Feb 2026",
    description:
      "Completed a Bachelor's degree in Computer Science with a focus on full-stack web development. Built practical experience through internships spanning ERP systems and modern MERN stack development.",
  },
];
