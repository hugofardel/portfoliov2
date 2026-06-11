import Section from "@/components/Section";

type Service = {
	title: string;
	description: string;
}

const services: Service[] = [
	{
		title: "Site vitrine",
		description: "Je développe des applications PHP depuis plus de 16 ans et je maitrise les frameworks Symfony 5 et Laravel 6."
	},
	{
		title: "Application web",
		description: "Je développe des applications PHP depuis plus de 16 ans et je maitrise les frameworks Symfony 5 et Laravel 6."
	},
]

function Services() {
	return (
		<Section title="Services">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:gap-10">
				{services.map((s, i) => (
					<ServicesCard key={i} title={s.title} description={s.description} />

				))}
			</div>
		</Section>

	);
}

function ServicesCard({ title, description }: Service) {
	return (
		<div className="border border-card bg-card shadow-2xs p-4 sm:p-6">
			<div className="font-semibold text-lg mb-3 text-gray-300">{title}</div>

			<p className="text-pretty text-gray-400 tracking-wide">{description}</p>
		</div>
	)
}


export default Services;
