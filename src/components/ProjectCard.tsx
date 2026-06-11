import { Link } from "react-router";

interface Props {
	icon: string;
	name: string;
	text: string;
	link: string;
}

function ProjectCard({ icon, name, text, link }: Props) {
	return (
		<div className="group">
			<Link to={link} aria-label={`Projet ${name}`} viewTransition>
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-card">
					<div className="overflow-hidden group-hover:opacity-70">
						<img src={icon} loading="lazy" className="rounded-t-xl border-none w-full h-100 object-cover duration-400 hover:opacity-95 group-hover:scale-120" alt="Projet illustration" />
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-medium text-lg md:text-xl text-gray-300 mb-2">{name}</p>
						<span className="text-lg text-gray-400">{text}</span>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default ProjectCard;
