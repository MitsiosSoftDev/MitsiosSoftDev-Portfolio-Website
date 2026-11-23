import type { ReactNode } from "react";
import type { TechnologyKey } from "../constants";

export interface ProjectCardProps {
	projectTitle: string;
	projectDescription: string;
	projectImageUrl?: string;
	projectLink?: string;
	technologies?: readonly TechnologyKey[];
	feature?: {
		label: string;
		visual: ReactNode;
	};
}

export interface ThemeToggleProps {
	className?: string;
	size?: "sm" | "lg";
}

export type ThemeMode = "light" | "dark" | "system";
