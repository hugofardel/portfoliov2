import SSIADsvg from "@/assets/ssiad.svg";
import Section from "@/components/Section";
import SingleJob from "@/components/SingleJob";

function Jobs() {
	return (
		<Section title="Mes expériences">
			<ul role="list" className="divide-y divide-gray-700">
				<SingleJob
					imgSrc={SSIADsvg}
					freelance={true}
					company="SSIAD Hesdin-la-Forêt"
					role="Développement d'un intranet"
					date="2025 - 2026"
					description="Conception et développement de l'intranet de l'association à destination des équipes : messagerie, planning, gestion de documents, etc."
					highlights={[
						"Interface sur mesure",
						"Mise en place d'une base de données",
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
					description="Site vitrine de présentation de l'association et de ses services de soins à domicile."
					tags={["Hugo", "decapCMS"]}
					link={{ href: "https://www.ssiad-hesdin-la-foret.fr", label: "Voir le site" }}
				/>

				<SingleJob
					imgSrc="https://fr.misgroup.io/Content/img/m-favicon.png"
					company="MIS Group"
					role="Développeur front-end"
					date="2022 - 2024"
					description="Développement front-end de la plateforme e-survey, dédiée à la création de questionnaires et à la collecte de répondants."
					highlights={[
						"Ajout de fonctionnalités",
						"Méthode AGILE / sprint hebdomadaire",
						"Maintenance et correction de bugs sur une plateforme B2B commercialisée",
						"Mise en place d’un serveur WebSocket",
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
					description="Stage de développement front-end : intégration de maquettes et développement de fonctionnalités de la plateforme."
					highlights={
						[
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
