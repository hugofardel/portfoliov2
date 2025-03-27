import React from "react";
import StackCard from "@/components/StackCard.jsx";

import ReactSvg from "@/assets/react.svg";
import StorybookSvg from "@/assets/storybook.svg";
import githubSvg from "@/assets/github.svg";
import reduxSvg from "@/assets/redux.svg";
import vuejsSvg from "@/assets/vuejs.svg";
import styledComponentsSvg from "@/assets/styled-components.svg";
import nodejsSvg from "@/assets/nodejs.svg";
import vitestSvg from "@/assets/vitest.svg";
import typescryptSvg from "@/assets/typescript.svg";
import tailwindSvg from "@/assets/tailwind.svg";
import JiraSvg from "@/assets/jira.svg";

function Stack() {
	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-3 text-ternary-light">Mes technologies / outils</p>
				<div className="flex justify-between border-b border-secondary-dark pb-3 gap-3"></div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 mt-6 sm:gap-10">
				<StackCard icon={ReactSvg} name="React" />
				<StackCard icon={vuejsSvg} name="Vue" />
				<StackCard icon={reduxSvg} name="Redux" />
				<StackCard icon={typescryptSvg} name="Typescript" />
				<StackCard icon={nodejsSvg} name="NodeJs" />
				<StackCard icon={vitestSvg} name="Vitest" />
				<StackCard icon={StorybookSvg} name="Storybook" />
				<StackCard icon={JiraSvg} name="Jira" />
				<StackCard icon={tailwindSvg} name="Tailwind" />
				<StackCard icon={styledComponentsSvg} name="Styled components" />
				<StackCard icon={githubSvg} name="Github" />
			</div>
		</section>
	);
}

export default Stack;
