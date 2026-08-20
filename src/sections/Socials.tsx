import Section from "@/components/Section";
import { socials } from "@/data/socials";

function Socials() {
	return (
		<Section title="Retrouvez-moi" id="socials">
			<div className="flex flex-col justify-center items-center mb-10 sm:mb-20">
				<ul className="flex gap-4 sm:gap-8 mt-5">
					{socials.map((link) => {
						const Icon = link.icon;
						return (
							<li
								key={link.id}
								className="text-gray-400 hover:text-primary cursor-pointer rounded-xl bg-card hover:bg-primary/10 hover:border-primary/30 border border-border/60 shadow-sm duration-300 transition-all hover:-translate-y-0.5"
							>
								<a
									href={link.url}
									title={link.title}
									target="_blank"
									rel="noopener noreferrer"
									className="p-4 block"
								>
									<span className="text-xl sm:text-2xl md:text-3xl">
										<Icon />
									</span>
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</Section>
	);
}

export default Socials;
