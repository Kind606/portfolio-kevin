import { ProjectCardProps } from "./projectCard";

export const projectCardDummy: Omit<
  ProjectCardProps,
  "title" | "description"
>[] = [
  {
    id: 1,
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
    githubLink:
      "https://github.com/Kind606/react-express-user-content-ts-t-k-innovations/tree/deployment-branch",
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
    githubLink: "https://github.com/Kind606/spel-projekt",
    previewLink: "https://spel-projekt-two.vercel.app/",
    competencies: [
      { id: 1, title: "p5.js" },
      { id: 2, title: "TypeScript" },
      { id: 3, title: "CSS" },
      { id: 4, title: "p5.sound.js" },
    ],
  },
];
