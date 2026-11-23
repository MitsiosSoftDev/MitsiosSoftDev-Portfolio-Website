import {
	FaBootstrap,
	FaCss3,
	FaDatabase,
	FaGitAlt,
	FaHtml5,
	FaJava,
	FaLock,
	FaNetworkWired,
	FaPython,
	FaReact,
} from "react-icons/fa6";
import {
	SiDotnet,
	SiJavascript,
	SiNumpy,
	SiRider,
	SiSass,
	SiScikitlearn,
	SiTailwindcss,
	SiTypescript,
	SiVite,
} from "react-icons/si";
import { TbApi, TbBrandCSharp } from "react-icons/tb";
import { VscAzure, VscVscode } from "react-icons/vsc";

export const TECHNOLOGIES = {
	js: { label: "JavaScript", icon: SiJavascript },
	java: { label: "Java", icon: FaJava },
	python: { label: "Python", icon: FaPython },
	dotnet: { label: ".NET", icon: SiDotnet },
	ts: { label: "TypeScript", icon: SiTypescript },
	azure: { label: "Azure", icon: VscAzure },
	vscode: { label: "Visual Studio Code", icon: VscVscode },
	rider: { label: "Rider", icon: SiRider },
	html: { label: "HTML", icon: FaHtml5 },
	css: { label: "CSS", icon: FaCss3 },
	react: { label: "React", icon: FaReact },
	csharp: { label: "C#", icon: TbBrandCSharp },
	db: { label: "SQL and databases", icon: FaDatabase },
	git: { label: "Git", icon: FaGitAlt },
	bootstrap: { label: "Bootstrap", icon: FaBootstrap },
	tailwind: { label: "Tailwind CSS", icon: SiTailwindcss },
	tcp: { label: "TCP sockets", icon: FaNetworkWired },
	sklearn: { label: "scikit-learn", icon: SiScikitlearn },
	crypto: { label: "cryptography", icon: FaLock },
	numpy: { label: "NumPy", icon: SiNumpy },
	scss: { label: "SCSS", icon: SiSass },
	vite: { label: "Vite", icon: SiVite },
	pokeapi: { label: "PokéAPI", icon: TbApi },
} as const;

export type TechnologyKey = keyof typeof TECHNOLOGIES;

const carouselTechnologies = [
	"js", "java", "python", "dotnet", "ts", "azure", "vscode", "rider",
	"html", "css", "react", "csharp", "db", "git", "bootstrap", "tailwind",
] as const satisfies readonly TechnologyKey[];

export const TECH_STACK_ICONS = carouselTechnologies.map((key) => ({
	key,
	...TECHNOLOGIES[key],
}));
