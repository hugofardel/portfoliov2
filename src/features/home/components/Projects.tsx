import ProjectCard from "@/components/ProjectCard";

import MastermindImg from "@/assets/mastermind2.png";
import SystemdevImg from "@/assets/systemdev.png";
import XtradeImg from "@/assets/xtrade.png";
import Section from "@/components/Section";

function Projects() {
	return (
		<Section title="Projets personnels">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:gap-10">
				<ProjectCard
					icon={MastermindImg}
					name="Mastermind"
					text="React"
					link="https://mastermind.hugo-fardel.fr/"
				/>
				{/* <ProjectCard
					icon={CodeNestImg}
					name="CodeNest"
					text="React / Storybook"
					link="https://code-nest-nine.vercel.app"
				/> */}

				<ProjectCard
					icon={SystemdevImg}
					name="Systemdev"
					text="React / tailwind"
					link="https://systemdev.hugo-fardel.fr"
				/>

				<ProjectCard icon={XtradeImg} name="XTrade" text="React" link="https://x-trade-hugo-fardel.vercel.app/" />
			</div>
		</Section>
	);
}

export default Projects;
