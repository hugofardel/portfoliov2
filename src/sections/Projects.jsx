import React from "react";
import ProjectCard from "@/components/ProjectCard.jsx";

import MastermindImg from "@/assets/mastermind2.png";
import XtradeImg from "@/assets/xtrade.png";
import CodeNestImg from "@/assets/codenest.png";

function Projects() {
	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-3 text-ternary-light">Projets personnels</p>
			</div>

			<div className="flex justify-between border-b border-secondary-dark pb-3 gap-3"></div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:gap-10">
				<ProjectCard
					icon={MastermindImg}
					name="Mastermind"
					text="React"
					link="https://mastermind-hugo-fardel.vercel.app/"
				/>
				<ProjectCard
					icon={CodeNestImg}
					name="CodeNest"
					text="React / Storybook"
					link="https://code-nest-nine.vercel.app"
				/>
				<ProjectCard icon={XtradeImg} name="XTrade" text="React" link="https://x-trade-hugo-fardel.vercel.app/" />
			</div>
		</section>
	);
}

export default Projects;
