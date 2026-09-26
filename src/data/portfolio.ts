export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  stack: string[];
  features: string[];
  accent: string;
  github?: string;
  live?: string;
  visual: "dashboard" | "food" | "social" | "portfolio" | "code";
};

export const profile = {
  name: "Vishnu Sharma",
  role: "Software Engineer",
  headline: "I build modern web applications that are fast, scalable and useful.",
  subline:
    "Frontend-focused engineer with full-stack experience across React, TypeScript, Java, Spring Boot, REST APIs and databases.",
  email: "your-email@example.com",
  github: "https://github.com/vishnusharma7",
  linkedin: "https://www.linkedin.com/",
  location: "India",
};

export const skills = {
  Frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "SCSS", "GSAP"],
  Backend: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs"],
  Database: ["PostgreSQL", "MySQL", "MongoDB"],
  Tools: ["Git", "GitHub", "Jenkins", "Vercel", "Netlify", "Figma"],
};

export const projects: Project[] = [
  // {
  //   id: "augmentation-scheme",
  //   number: "01",
  //   title: "Augmentation Scheme System",
  //   category: "Enterprise Full Stack",
  //   description: "A calculation-driven application for material reuse, cost estimation and consolidated scheme values.",
  //   longDescription:
  //     "A React and TypeScript interface backed by Java services and a relational database. The UI guides users through material equipment, dismantling, supervision and consolidated calculations while keeping totals and API state synchronized.",
  //   stack: ["React", "TypeScript", "Java", "Spring Boot", "PostgreSQL"],
  //   features: [
  //     "Dynamic material and reuse workflow",
  //     "Live calculation of material, labour and overhead values",
  //     "REST API integration and save flow",
  //     "Validation and success feedback",
  //     "Responsive tabbed workflow",
  //   ],
  //   accent: "#6ee7ff",
  //   visual: "dashboard",
  // },
  {
    id: "recipe-lens",
    number: "01",
    title: "Recipe Lens",
    category: "Computer Vision / Food",
    description: "An Indian food image-to-recipe experience that turns a food photo into a guided recipe workflow.",
    longDescription:
      "A focused product concept where a user uploads a food image and receives a structured recipe experience. The interface emphasizes visual storytelling, simple upload states and mobile-friendly results.",
    stack: ["Python", "Django", "HTML", "CSS"],
    features: ["Image upload", "Recipe result view", "Indian food focus", "Responsive UI", "Clear user states"],
    accent: "#ffb86b",
    visual: "food",
  },
  {
    id: "lets-connect",
    number: "02",
    title: "Let's Connect",
    category: "Full Stack Social App",
    description: "A social platform with user profiles, messaging-style interactions and a responsive modern UI.",
    longDescription:
      "A full-stack project combining a React interface with a Node/Express backend and MySQL persistence. The project explores reusable UI components, API flows, authentication and user-focused interactions.",
    stack: ["React", "SCSS", "Node.js", "Express.js", "MySQL"],
    features: ["User profiles", "Authentication flow", "REST APIs", "Responsive components", "Database integration"],
    accent: "#9b8cff",
    visual: "social",
  },
  {
    id: "portfolio",
    number: "03",
    title: "Personal Portfolio",
    category: "Frontend Engineering",
    description: "A performance-conscious personal site focused on interaction design, responsive layouts and motion.",
    longDescription:
      "A custom portfolio system designed around reusable React components, responsive behavior, subtle motion and deployment-friendly architecture.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: ["Responsive layout", "Motion system", "Reusable components", "SEO metadata", "Vercel deployment"],
    accent: "#8cffc1",
    visual: "portfolio",
  },
  {
    id: "codebell",
    number: "04",
    title: "Codebell",
    category: "Product UI",
    description: "Modern product and website experiences built around responsive interfaces and polished interactions.",
    longDescription:
      "A collection of frontend work focused on translating product requirements into clean, responsive interfaces with reusable sections and animation.",
    stack: ["React", "JavaScript", "SCSS", "GSAP"],
    features: ["Responsive sections", "Animation", "Component reuse", "API-ready architecture"],
    accent: "#f78cff",
    visual: "code",
  },
];

export const experience = [
  {
    period: "2024 — Present",
    title: "Software Engineer",
    company: "Professional Engineering Work",
    points: [
      "Building web interfaces and business workflows with React and TypeScript.",
      "Working with Java/Spring Boot APIs and relational databases.",
      "Integrating APIs, validations, calculations and reusable UI components.",
    ],
    stack: ["React", "TypeScript", "Java", "Spring Boot", "PostgreSQL"],
  },
  {
    period: "2023 — 2024",
    title: "Frontend Developer",
    company: "Startup / Product Projects",
    points: [
      "Built responsive interfaces for product and client-facing websites.",
      "Worked with React, JavaScript, SCSS, Tailwind CSS and animation.",
      "Focused on component reuse, responsive behavior and interaction polish.",
    ],
    stack: ["React", "JavaScript", "SCSS", "Tailwind", "GSAP"],
  },
  {
    period: "2023",
    title: "Engineering Intern",
    company: "Persistent Systems — Martian Program",
    points: [
      "Strengthened fundamentals across Core Java, DBMS, networking, Linux and DSA.",
      "Worked through object-oriented programming and problem-solving exercises.",
    ],
    stack: ["Java", "DBMS", "Networking", "Linux", "DSA"],
  },
];

export const achievements = [
  { title: "B.Tech — Information Technology", detail: "Asansol Engineering College" },
  { title: "Frontend + Full Stack Projects", detail: "Multiple production-style applications" },
  { title: "Deployment Experience", detail: "Vercel • Netlify • Render" },
  { title: "Engineering Foundations", detail: "Java • DSA • DBMS • Networking • Linux" },
];
