import StackCard from "@/components/StackCard";

import GitSvg from "@/assets/git.svg";
import JiraSvg from "@/assets/jira.svg";
import NextSvg from "@/assets/next.svg";
import nodejsSvg from "@/assets/nodejs.svg";
import ReactSvg from "@/assets/react.svg";
import StorybookSvg from "@/assets/storybook.svg";
import SupabaseSvg from "@/assets/supabase.svg";
import tailwindSvg from "@/assets/tailwind.svg";
import tanstackSvg from "@/assets/tanstack.svg";
import typescryptSvg from "@/assets/typescript.svg";
import vitestSvg from "@/assets/vitest.svg";
import Section from "@/components/Section";

function Stack() {
	return (
		<Section title="Mes technologies / outils">
			<div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 mt-6 gap-5 sm:gap-10">
				<StackCard icon={ReactSvg} name="React" />
				<StackCard icon={NextSvg} name="Next" />
				<StackCard icon={typescryptSvg} name="Typescript" />
				<StackCard icon={tailwindSvg} name="Tailwind" />
				<StackCard icon={tanstackSvg} name="Tanstack Query" />
				<StackCard icon={SupabaseSvg} name="Supabase" />
				<StackCard icon={nodejsSvg} name="NodeJs" />
				<StackCard icon={vitestSvg} name="Vitest" />
				<StackCard icon={StorybookSvg} name="Storybook" />
				<StackCard icon={JiraSvg} name="Jira" />
				<StackCard icon={GitSvg} name="Git" />
			</div>
		</Section>
	);
}

export default Stack;
