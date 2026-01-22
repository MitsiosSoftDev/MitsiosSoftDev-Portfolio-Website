import React from "react";
import { useTheme } from "next-themes";
import { BsSun, BsMoon, BsLaptop } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import "../../styles/_themeToggle.scss";
import type { ThemeMode, ThemeToggleProps } from "../../types/types";

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
  size,
}) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const current = (theme as ThemeMode | undefined) ?? "system";
  const resolved = (resolvedTheme as "light" | "dark" | undefined) ?? "light";
  const iconColor = resolved === "dark" ? "#fff" : "#000";
  const ButtonIcon =
    current === "system" ? BsLaptop : resolved === "dark" ? BsMoon : BsSun;

  return (
    <Dropdown
      className={`${className} d-flex justify-content-center`}
      align="start"
    >
      <Dropdown.Toggle
        variant="link"
        size={size}
        aria-label="Theme Menu"
        className="theme-toggle-btn"
      >
        <ButtonIcon color={iconColor} className="m-1" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setTheme("light")}>
          <span className="d-inline-flex align-items-center gap-2">
            <BsSun /> Light
          </span>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme("dark")}>
          <span className="d-inline-flex align-items-center gap-2">
            <BsMoon /> Dark
          </span>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme("system")}>
          <span className="d-inline-flex align-items-center gap-2">
            <BsLaptop /> System
          </span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
