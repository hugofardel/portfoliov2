import SSIADsvg from "@/assets/ssiad.svg";

export type Job = {
	id: string;
	role: string;
	company: string;
	imgSrc: string;
	date: string;
	description: string;
	highlights?: string[];
	tags: string[];
	link?: { href: string; label: string };
	freelance?: boolean;
};

export const jobs: Job[] = [
	{
		id: "ssiad-intranet",
		role: "Développement d'un intranet",
		freelance: true,
		company: "SSIAD Hesdin-la-Forêt",
		date: "2025 - 2026",
		description:
			"Intranet complet pour les équipes : messagerie, planning, documents et administration.",
		highlights: [
			"Interface sur mesure",
			"Conception de modules : messagerie, documents, planning, annuaire, administration, etc.",
			"Mise en place d'une base de données et communication websocket",
			"Évolutions et ajouts de fonctionnalités réguliers",
		],
		tags: ["React", "TypeScript", "Supabase"],
		imgSrc: SSIADsvg,
	},
	{
		id: "ssiad-siteweb",
		role: "Développement d'un site web",
		freelance: true,
		company: "SSIAD Hesdin-la-Forêt",
		date: "2025",
		description:
			"Site vitrine présentant l'association et ses services de soins à domicile.",
		tags: ["Hugo", "decapCMS"],
		imgSrc: SSIADsvg,
	},

	{
		id: "mis-esurvey",
		role: "Développeur front-end",
		company: "MIS Group",
		date: "2022 - 2024",
		description:
			"Développement front-end de la plateforme e-survey, dédiée aux questionnaires et à la collecte de répondants.",
		tags: ["React", "NodeJS"],
		imgSrc: "https://fr.misgroup.io/Content/img/m-favicon.png",
		link: {
			href: "https://admin.e-survey.io/register/step-1?lng=fr",
			label: "Créez-vous un compte gratuitement pour utiliser la plateforme !",
		},
		highlights: [
			"Ajout de fonctionnalités",
			"Méthode AGILE / sprint hebdomadaire",
			"Maintenance et correction de bugs sur une plateforme B2B commercialisée",
			"Mise en place d'un serveur WebSocket",
			"Travail en binôme sur un produit en production",
		],
	},

	{
		id: "mis-onqual",
		role: "Développeur front-end (stage)",
		company: "MIS Group",
		date: "Mai - octobre 2022",
		description:
			"Intégration de maquettes et développement de fonctionnalités en Vue.js sur une plateforme B2B.",
		tags: ["Vue.js"],
		imgSrc: "https://fr.misgroup.io/Content/img/m-favicon.png",
		highlights: [
			"Développement d'une plateforme B2B de bout en bout",
			"Développement front-end en Vue.js",
			"Intégration des maquettes et des données backend",
			"Travail en binôme avec un développeur backend",
		],
	},
];
