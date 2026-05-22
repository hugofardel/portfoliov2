import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/tailwind.css";
import App from "./AppRouter";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
