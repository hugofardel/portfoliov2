import { BrowserRouter, Route, Routes } from "react-router";
import Services from "./pages/Services";
import ProjectLayout from "./layout/ProjectLayout";
import Home from "./pages/Home";

function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/services" element={<Services />} />
				<Route path="project/:id">
					<Route index element={<ProjectLayout />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;
