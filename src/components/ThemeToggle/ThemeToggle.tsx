import { useTheme } from "next-themes";
import { Dropdown } from "react-bootstrap";
import { BsLaptop, BsMoon, BsSun } from "react-icons/bs";
import type { ThemeMode, ThemeToggleProps } from "../../types/types";
import "../../styles/_themeToggle.scss";

const themeOptions = [
	{ mode: "light", label: "Light", icon: BsSun },
	{ mode: "dark", label: "Dark", icon: BsMoon },
	{ mode: "system", label: "System", icon: BsLaptop },
] as const satisfies ReadonlyArray<{ mode: ThemeMode; label: string; icon: typeof BsSun }>;

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
	className = "",
	size,
}) => {
	const { theme, setTheme } = useTheme();
	const ButtonIcon = themeOptions.find(({ mode }) => mode === theme)?.icon ?? BsLaptop;

	return (
		<Dropdown className={`theme-menu ${className}`} align="end">
			<Dropdown.Toggle
				id="portfolio-theme-menu"
				variant="light"
				size={size}
				className="theme-toggle-btn"
			>
				<ButtonIcon size={17} aria-hidden="true" />
				Theme
			</Dropdown.Toggle>

			<Dropdown.Menu className="theme-options">
				{themeOptions.map(({ mode, label, icon: Icon }) => (
					<Dropdown.Item
						key={mode}
						as="button"
						type="button"
						active={(theme ?? "system") === mode}
						aria-pressed={(theme ?? "system") === mode}
						onClick={() => setTheme(mode)}
					>
						<span className="d-inline-flex align-items-center gap-2">
							<Icon aria-hidden="true" />
							{label}
						</span>
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
};
