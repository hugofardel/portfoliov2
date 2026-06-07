interface Props {
	icon: string;
	name: string;
	text: string;
	link: string;
}

function ProjectCard({ icon, name, text, link }: Props) {
	return (
		<div>
			<a href={link} aria-label="Single Project">
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-card">
					<div>
						<img src={icon} className="rounded-t-xl border-none w-full h-100 object-cover" alt="Single Project" loading="lazy" />
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-medium text-lg md:text-xl text-gray-300 mb-2">{name}</p>
						<span className="text-lg text-gray-400">{text}</span>
					</div>
				</div>
			</a>
		</div>
	);
}

export default ProjectCard;
