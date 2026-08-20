import Section from "@/components/Section";
import StackCard from "@/components/StackCard";

import gitSvg from "@/assets/git.svg";
import jiraSvg from "@/assets/jira.svg";
import nextSvg from "@/assets/next.svg";
import nodejsSvg from "@/assets/nodejs.svg";
import reactSvg from "@/assets/react.svg";
import storybookSvg from "@/assets/storybook.svg";
import supabaseSvg from "@/assets/supabase.svg";
import tailwindSvg from "@/assets/tailwind.svg";
import tanstackSvg from "@/assets/tanstack.svg";
import typescriptSvg from "@/assets/typescript.svg";
import vitestSvg from "@/assets/vitest.svg";

function Stack() {
	return (
		<Section title="Mes technologies / outils">
			<div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 mt-6 gap-5 sm:gap-10">
				<StackCard icon={reactSvg} name="React" />
				<StackCard icon={nextSvg} name="Next" />
				<StackCard icon={typescriptSvg} name="TypeScript" />
				<StackCard icon={tailwindSvg} name="Tailwind" />
				<StackCard icon={tanstackSvg} name="TanStack Query" />
				<StackCard icon={supabaseSvg} name="Supabase" />
				<StackCard icon={nodejsSvg} name="Node.js" />
				<StackCard icon={vitestSvg} name="Vitest" />
				<StackCard icon={storybookSvg} name="Storybook" />
				<StackCard icon={jiraSvg} name="Jira" />
				<StackCard icon={gitSvg} name="Git" />
			</div>
		</Section>
	);
}

export default Stack;
