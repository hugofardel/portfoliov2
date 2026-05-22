import StackCard from "@/components/StackCard";

import ReactSvg from "@/assets/react.svg";
import NextSvg from "@/assets/next.svg";
import StorybookSvg from "@/assets/storybook.svg";
import GitSvg from "@/assets/git.svg";
import nodejsSvg from "@/assets/nodejs.svg";
import vitestSvg from "@/assets/vitest.svg";
import typescryptSvg from "@/assets/typescript.svg";
import tailwindSvg from "@/assets/tailwind.svg";
import JiraSvg from "@/assets/jira.svg";
import SupabaseSvg from "@/assets/supabase.svg";

function Stack() {
	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<h2>Mes technologies / outils</h2>
				<div className="flex justify-between border-b border-secondary-dark pb-3 gap-3"></div>
			</div>

			<div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 mt-6 gap-5 sm:gap-10">
				<StackCard icon={ReactSvg} name="React" />
				<StackCard icon={NextSvg} name="Next" />
				<StackCard icon={typescryptSvg} name="Typescript" />
				<StackCard icon={SupabaseSvg} name="Supabase" />
				<StackCard icon={tailwindSvg} name="Tailwind" />
				<StackCard icon={nodejsSvg} name="NodeJs" />
				<StackCard icon={vitestSvg} name="Vitest" />
				<StackCard icon={StorybookSvg} name="Storybook" />
				<StackCard icon={JiraSvg} name="Jira" />
				<StackCard icon={GitSvg} name="Git" />
			</div>
		</section>
	);
}

export default Stack;
