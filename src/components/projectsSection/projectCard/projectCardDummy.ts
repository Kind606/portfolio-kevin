import { ProjectCardProps } from "./projectCard";

/**
 * HOW TO ADD A NEW PROJECT:
 *
 * 1. Add project data to this array with a unique `key` property
 * 2. Add translations to both sv.ts and en.ts with the same key:
 *    projects: {
 *      yourKey: {
 *        title: "Your Title",
 *        description: "Your description"
 *      }
 *    }
 * 3. That's it! The project will automatically appear.
 */

export const projectCardDummy: (Omit<
  ProjectCardProps,
  "title" | "description"
> & { key: string })[] = [
  {
    id: 1,
    key: "gymPlanner",
    githubLink: "https://github.com/Kind606/examens-arbete-kevin",
    previewLink: "https://examens-arbete-kevin.vercel.app/login",
    competencies: [
      { id: 1, title: "Next.js" },
      { id: 2, title: "TypeScript" },
      { id: 3, title: "CSS" },
      { id: 4, title: "Node.js" },
      { id: 5, title: "Prisma" },
      { id: 6, title: "MongoDB" },
    ],
  },
  {
    id: 2,
    key: "ECommerce",
    githubLink: "https://github.com/Kind606/kombucha-shop",
    previewLink: "https://kombucha-shop-iota.vercel.app/",
    competencies: [
      { id: 1, title: "Next.js" },
      { id: 2, title: "TypeScript" },
      { id: 3, title: "MUI" },
      { id: 4, title: "Node.js" },
      { id: 5, title: "Prisma" },
      { id: 6, title: "Better Auth"},
      { id: 7, title: "PostgreSQL" },
    ],
  },
  {
    id: 3,
    key: "postApp",
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
    id: 4,
    key: "pixelGame",
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
