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
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-dark">
					<div>
						<img src={icon} className="rounded-t-xl border-none w-full h-100 object-cover" alt="Single Project" />
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-light mb-2">{name}</p>
						<span className="text-lg text-ternary-light">{text}</span>
					</div>
				</div>
			</a>
		</div>
	);
}

export default ProjectCard;
