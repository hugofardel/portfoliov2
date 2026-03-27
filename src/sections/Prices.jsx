import TarifCard from "../components/tarifs/TarifCard";
import TarifList from "../components/tarifs/TarifList";
import TarifItem from "../components/tarifs/TarifItem";

function Prices() {
	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<div className="font-medium text-2xl sm:text-4xl mb-4 text-ternary-light">Mes tarifs</div>
				<p className="font-medium mb-1 text-lg text-gray-400">
					Tarifs indicatifs pour la création de sites web. <br /> Chaque projet étant unique, un devis précis sera
					établi après discussion.
				</p>
			</div>

			<div className="grid grid-cols-3 gap-4 mt-12">
				<TarifCard title="Site vitrine simple" description="L'essentiel en moins de 5 pages" price="1200€">
					<TarifList>
						<TarifItem>jusqu'à 5 pages</TarifItem>
						<TarifItem>design responsive</TarifItem>
						<TarifItem>Optimisation SEO</TarifItem>
						<TarifItem>Formulaire de contact</TarifItem>
						<TarifItem>Deploiement / mise en ligne</TarifItem>
					</TarifList>
				</TarifCard>

				<TarifCard title="Site vitrine complexe" description="L'essentiel en moins de 8 pages" price="1800€">
					<TarifList>
						<TarifItem>jusqu'à 8 pages</TarifItem>
						<TarifItem>Optimisation SEO</TarifItem>
						<TarifItem>Formulaires avancés</TarifItem>
						<TarifItem>Animations / interactions</TarifItem>
						<TarifItem>Deploiement / mise en ligne</TarifItem>
						<TarifItem>CMS / gestion de contenu</TarifItem>
					</TarifList>
				</TarifCard>

				<TarifCard title="Sur mesure" description="Pour autre type de projet, exemple intranet, etc..." price="3000€">
					<TarifList>
						<TarifItem>Web app</TarifItem>
						<TarifItem>SaaS</TarifItem>
						<TarifItem>Dashboard</TarifItem>
						<TarifItem>Intranet / outils internes</TarifItem>
					</TarifList>
				</TarifCard>
			</div>

			<div className="p-8 rounded-xl shadow-lg hover:shadow-xl bg-ternary-dark border-1 border-gray-600 mt-10">
				<div className="text-indigo-400 font-medium text-lg">Tous les projets incluent :</div>
				<TarifList>
					<TarifItem>Design responsive</TarifItem>
					<TarifItem>Optimisation performance</TarifItem>
					<TarifItem>Code propre et maintenable</TarifItem>
					<TarifItem>Support après livraison</TarifItem>
				</TarifList>
			</div>
		</section>
	);
}

export default Prices;
