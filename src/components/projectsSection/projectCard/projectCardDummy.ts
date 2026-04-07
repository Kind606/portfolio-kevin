import { ProjectCardProps } from "./projectCard";

export const projectCardDummy: ProjectCardProps[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "En modern e-handelsplattform byggd med Next.js och TypeScript. Inklusive kundvagn, betalningsintegration och produkthantering.",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    previewLink: "https://ecommerce-demo.vercel.app",
    competencies: [
      { id: 1, title: "Next.js" },
      { id: 2, title: "TypeScript" },
      { id: 3, title: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "En responsiv task management applikation med drag-and-drop funktionalitet, realtidsuppdateringar och teamsamarbete.",
    githubLink: "https://github.com/yourusername/task-manager",
    previewLink: "https://task-manager-demo.vercel.app",
    competencies: [
      { id: 1, title: "React" },
      { id: 2, title: "Node.js" },
      { id: 3, title: "MongoDB" },
    ],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "En elegant väderapp som visar aktuellt väder och prognoser. Inkluderar geolokalisering och interaktiva kartor.",
    githubLink: "https://github.com/yourusername/weather-dashboard",
    previewLink: "https://weather-dashboard-demo.vercel.app",
    competencies: [
      { id: 1, title: "React" },
      { id: 2, title: "API Integration" },
      { id: 3, title: "CSS Modules" },
    ],
  },
];
