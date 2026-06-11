import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./features/home/HomePage";
import ProjectDetailPage from "./features/project-detail/ProjectDetailPage";
import ProjectsPage from "./features/projects/ProjectsPage";
import AppLayout from "./layout/AppLayout";

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/projects",
				element: <ProjectsPage />,
			},
			{
				path: "/projects/:id",
				element: <ProjectDetailPage />,
			},
		],
	},
]);

export default function AppRouter() {
	return <RouterProvider router={router} />;
}

