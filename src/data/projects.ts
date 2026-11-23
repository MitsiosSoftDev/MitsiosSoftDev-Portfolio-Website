import type { TechnologyKey } from "../constants";

type Project = {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  technologies: readonly TechnologyKey[];
};

export const featuredProject = {
  id: "iot-project",
  title: "IoT threat detection and mitigation",
  description:
    "For my computer science thesis, I built a Python tool to detect and mitigate threats in IoT systems. The client and server communicate over sockets.",
  githubUrl:
    "https://github.com/MitsiosSoftDev/Tool_Development_for_Detection_and_Mitigation_of_IoT_Threats",
  technologies: ["python", "tcp", "sklearn", "crypto", "numpy"],
} satisfies Project;

export const projects = [
  {
    id: "portfolio",
    title: "Portfolio website",
    description:
      "My personal site, built with React, TypeScript and Bootstrap.",
    githubUrl:
      "https://github.com/MitsiosSoftDev/MitsiosSoftDev-Portfolio-Website",
    technologies: ["ts", "react", "bootstrap", "scss", "vite"],
  },
  {
    id: "pokedex-project",
    title: "Pokédex",
    description:
      "A JavaScript project that fetches and displays Pokémon data from an API.",
    githubUrl: "https://github.com/MitsiosSoftDev/Pokedex",
    technologies: ["js", "html", "css", "pokeapi"],
  },
  {
    id: "snake-project",
    title: "Snake Game",
    description:
      "An early JavaScript project implementing the classic Snake game.",
    githubUrl: "https://github.com/MitsiosSoftDev/Snake-Game-Javascript",
    technologies: ["js", "html", "css"],
  },
] satisfies Project[];
