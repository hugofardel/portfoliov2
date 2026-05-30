import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./layout/AppLayout";
import ProjectLayout from "./layout/ProjectLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route index element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="project/:id">
						<Route index element={<ProjectLayout />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;
