import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "next-themes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/_bootstrap-theme.scss";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider attribute="data-bs-theme" enableSystem>
			<App />
		</ThemeProvider>
	</StrictMode>
);
