import Section from "@/components/Section";
import { Check, Globe, MonitorSmartphone, Wrench, type LucideIcon } from "lucide-react";

type Service = {
	id: string;
	title: string;
	description: string;
	icon: LucideIcon;
	points: string[];
}

const services: Service[] = [
	{
		id: "site-vitrine",
		title: "Site vitrine",
		description: "Je développe des sites vitrines personnalisées à vos besoins.",
		icon: Globe,
		points: ["Design sur mesure", "Optimisé SEO & responsive", "Formulaire de contact"],
	},
	{
		id: "application-web",
		title: "Application web",
		description: "Des applications pensées pour vous, vos utilisateurs et vos objectifs.",
		icon: MonitorSmartphone,
		points: ["Fonctionnalités sur mesure", "Sécurité & authentification", "Espace d'administration"],
	},
	{
		id: "maintenance",
		title: "Maintenance & évolution",
		description: "J'accompagne votre projet dans la durée : corrections, améliorations et conseils.",
		icon: Wrench,
		points: ["Corrections de bugs", "Ajout de fonctionnalités", "Conseil & suivi technique"],
	},
]

function Services() {
	return (
		<Section title="Services">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
				{services.map((service) => (
					<ServicesCard key={service.id} {...service} />
				))}
			</div>
		</Section>
	);
}

function ServicesCard({ title, description, icon: Icon, points }: Service) {
	return (
		<article className="group flex flex-col rounded-xl bg-card p-6 sm:p-8 shadow-lg hover:shadow-2xl border border-border/60 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
			<div className="mb-5 inline-flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
				<Icon className="size-7" aria-hidden="true" />
			</div>
			<h3 className="font-semibold text-lg text-gray-300 transition-colors duration-300 group-hover:text-foreground">
				{title}
			</h3>
			<p className="mt-2 text-pretty text-gray-400 tracking-wide">{description}</p>
			<ul className="mt-5 space-y-2 border-t border-border/60 pt-5">
				{points.map((point) => (
					<li key={point} className="flex items-center gap-2 text-sm text-gray-400">
						<Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
						{point}
					</li>
				))}
			</ul>
		</article>
	);
}

export default Services;
