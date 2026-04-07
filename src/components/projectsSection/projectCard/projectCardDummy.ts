import { ProjectCardProps } from "./projectCard";

export const projectCardDummy: ProjectCardProps[] = [
  {
    id: 1,
    title: "Gym planner",
    description:
      "En fullstack e-handelsplattform för att planera och hantera gymträning som blev mitt examensarbete, byggd med Next.js och TypeScript.",
    githubLink: "https://github.com/Kind606/examens-arbete-kevin",
    previewLink: "https://examens-arbete-kevin.vercel.app/login",
    competencies: [
      { id: 1, title: "Next.js" },
      { id: 2, title: "TypeScript" },
      { id: 3, title: "CSS" },
      { id: 4, title: "Node.js" },
      { id: 5, title: "Prisma" },
    ],
  },
  {
    id: 2,
    title: "Post applikation",
    description:
      "En enkel fullstack applikation för att skapa, läsa, uppdatera och ta bort inlägg med användare. Byggd med React, Node.js och MongoDB.",
    githubLink: "https://github.com/Kind606/react-express-user-content-ts-t-k-innovations/tree/deployment-branch",
    previewLink: "https://react-express-user-content-ts-t-k-i-zeta.vercel.app/",
    competencies: [
      { id: 1, title: "React" },
      { id: 2, title: "Node.js" },
      { id: 3, title: "MongoDB" },
      { id: 4, title: "Express" },
      { id: 5, title: "MUI" },
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
