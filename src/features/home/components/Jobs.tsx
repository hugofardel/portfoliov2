import SSIADsvg from "@/assets/ssiad.svg";
import Section from "@/components/Section";
import SingleJob from "@/components/SingleJob";

function Jobs() {
	return (
		<Section title="Mes expériences">
			<ul role="list" className="relative">
				<div aria-hidden="true" className="absolute inset-y-2 left-[13px] w-px bg-primary/50" />

				<SingleJob
					imgSrc={SSIADsvg}
					freelance={true}
					company="SSIAD Hesdin-la-Forêt"
					role="Développement d'un intranet"
					date="2025 - 2026"
					description="Intranet complet pour les équipes : messagerie, planning, documents et administration."
					highlights={[
						"Interface sur mesure",
						"Conception de modules : messagerie, documents, planning, annuaire, administration, etc.",
						"Mise en place d'une base de données et communication websocket",
						"Évolutions et ajouts de fonctionnalités réguliers",
					]}
					tags={["React", "TypeScript", "Supabase"]}
				/>

				<SingleJob
					imgSrc={SSIADsvg}
					freelance={true}
					company="SSIAD Hesdin-la-Forêt"
					role="Développement d'un site web"
					date="2025"
					description="Site vitrine présentant l'association et ses services de soins à domicile."
					tags={["Hugo", "decapCMS"]}
					link={{ href: "https://www.ssiad-hesdin-la-foret.fr", label: "Voir le site" }}
				/>

				<SingleJob
					imgSrc="https://fr.misgroup.io/Content/img/m-favicon.png"
					company="MIS Group"
					role="Développeur front-end"
					date="2022 - 2024"
					description="Développement front-end de la plateforme e-survey, dédiée aux questionnaires et à la collecte de répondants."
					highlights={[
						"Ajout de fonctionnalités",
						"Méthode AGILE / sprint hebdomadaire",
						"Maintenance et correction de bugs sur une plateforme B2B commercialisée",
						"Mise en place d'un serveur WebSocket",
						"Travail en binôme sur un produit en production"
					]}
					tags={["React", "NodeJS"]}
					link={{ href: "https://admin.e-survey.io/register/step-1?lng=fr", label: "Créez-vous un compte gratuitement pour utiliser la plateforme !" }}
				/>

				<SingleJob
					imgSrc="https://fr.misgroup.io/Content/img/m-favicon.png"
					company="MIS Group"
					role="Développeur front-end (stage)"
					date="Mai - octobre 2022"
					description="Intégration de maquettes et développement de fonctionnalités en Vue.js sur une plateforme B2B."
					highlights={[
						"Développement d'une plateforme B2B de bout en bout",
						"Développement front-end en Vue.js",
						"Intégration des maquettes et des données backend",
						"Travail en binôme avec un développeur backend"
					]}
					tags={["Vue.js"]}
				/>
			</ul>
		</Section>
	);
}

export default Jobs;
