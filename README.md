# Mohid Yaseen — Portfolio

Personal developer portfolio built with React, TypeScript, and Vite — showcasing my tech stack, featured projects, experience timeline, and a live contact form.

**Live site:** _add your deployed URL here once live_

---

## Features

- Animated hero section with floating code snippet cards
- Tech stack overview across Frontend, Backend, Databases, and DevOps & Tools
- Featured projects with direct links to live demos and GitHub repos
- Experience timeline covering education and internships
- Contact form wired to [Web3Forms](https://web3forms.com) for real message delivery
- Resume opens directly as a PDF in a new tab
- Smooth scroll navigation and section-aware active nav highlighting
- Fully responsive, dark-themed UI with subtle scroll-triggered animations

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React, React Icons
- **Form Handling:** Web3Forms API

---

## Project Structure

mohid-official-portfolio/
├── public/
│ └── resume.pdf # Resume, opened directly on click
├── src/
│ ├── components/ # Navbar, Hero, TechStack, FeaturedProjects, Experience, Contact, Footer
│ ├── data/
│ │ └── portfolioData.ts # Tech stack, projects, and experience content
│ ├── types.ts # Shared TypeScript interfaces
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json

---

## Getting Started

### Prerequisites

- Node.js

### Installation

```bash
git clone https://github.com/MohidWebDev/mohid-official-portfolio.git
cd mohid-official-portfolio
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your own value:

```bash
cp .env.example .env.local
```

| Variable             | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `VITE_WEB3FORMS_KEY` | Access key for the contact form, from [web3forms.com](https://web3forms.com) |

### Run Locally

```bash
npm run dev
```

The app will run at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder.

---

## Deployment

This project is a static Vite build and deploys cleanly to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or any static hosting provider. Remember to set `VITE_WEB3FORMS_KEY` in your hosting provider's environment variables for the contact form to work in production.

---

## License

MIT
