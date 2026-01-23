import {
	FaBootstrap,
	FaCss3,
	FaDatabase,
	FaGitAlt,
	FaHtml5,
	FaJava,
	FaPython,
	FaReact,
} from "react-icons/fa6";
import { SiDotnet, SiJavascript, SiRider, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure, VscVscode } from "react-icons/vsc";

export const TECH_STACK_ICONS = [
	{ key: "js", icon: SiJavascript },
	{ key: "java", icon: FaJava },
	{ key: "python", icon: FaPython },
	{ key: "dotnet", icon: SiDotnet },
	{ key: "ts", icon: SiTypescript },
	{ key: "azure", icon: VscAzure },
	{ key: "vscode", icon: VscVscode },
	{ key: "rider", icon: SiRider },
	{ key: "html", icon: FaHtml5 },
	{ key: "css", icon: FaCss3 },
	{ key: "react", icon: FaReact },
	{ key: "csharp", icon: TbBrandCSharp },
	{ key: "db", icon: FaDatabase },
	{ key: "git", icon: FaGitAlt },
	{ key: "bootstrap", icon: FaBootstrap },
];
