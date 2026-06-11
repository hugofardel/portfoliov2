import SSIADsvg from "@/assets/ssiad.svg";
import Section from "@/components/Section";
import SingleJob from "@/components/SingleJob";

function Jobs() {
	return (
		<Section title="Mes expériences">
			<ul role="list" className="divide-y divide-gray-700">
				<SingleJob
					imgSrc={SSIADsvg}
					company="SSIAD Hesdin-la-Forêt"
					role="Développement d'un intranet"
					stacks="React TS - supabase"
					date="2025 - 2026"
				/>

				<SingleJob
					imgSrc={SSIADsvg}
					company="SSIAD Hesdin-la-Forêt"
					role="Développement d'un site web"
					stacks="hugo - decapCMS"
					date="2025"
				/>

				<SingleJob
					imgSrc="https://fr.misgroup.io/Content/img/m-favicon.png"
					company="MIS Group"
					role="Développeur front-end"
					stacks="React - NodeJS"
					date="2022 - 2024"
				/>

				<SingleJob
					imgSrc="https://fr.misgroup.io/Content/img/m-favicon.png"
					company="MIS Group"
					role="Développeur front-end (stage)"
					stacks="Vuejs"
					date="Mai - octobre 2022"
				/>
			</ul>
		</Section>
	);
}

export default Jobs;
