import type { Project } from "@/data/projects";

function ProjectCard({ icon, name, text, link }: Project) {
	return (
		<div className="group">
			<a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Projet ${name}`}>
				<div className="relative rounded-xl shadow-lg hover:shadow-2xl hover:shadow-primary/5 cursor-pointer bg-card border border-border/60 hover:border-primary/30 overflow-hidden transition-all duration-300 hover:-translate-y-1">
					<div className="overflow-hidden">
						<img src={icon} loading="lazy" className="border-none w-full h-100 object-cover duration-500 group-hover:scale-110" alt="Illustration du projet" />
					</div>
					<div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
					<div className="absolute bottom-0 left-0 right-0 px-4 py-6">
						<p className="font-semibold text-lg md:text-xl text-foreground mb-1">{name}</p>
						<span className="block text-sm text-primary/80 font-medium">{text}</span>
					</div>
				</div>
			</a>
		</div>
	);
}

export default ProjectCard;
