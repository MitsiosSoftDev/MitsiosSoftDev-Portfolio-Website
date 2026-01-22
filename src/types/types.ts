export interface ProjectCardProps {
  projectTitle: string;
  projectDescription: string;
  projectImageUrl?: string;
  projectLink?: string;
}

export interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "lg";
}

export type ThemeMode = "light" | "dark" | "system";
