import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { projects } from "@/data/projects";

function Projects() {
	return (
		<Section title="Projets personnels">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:gap-10 gap-5">
				{projects.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</Section>
	);
}

export default Projects;
