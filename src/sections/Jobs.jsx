import React from "react";

import SSIADsvg from "@/assets/ssiad.svg";
import SingleJob from "@/components/SingleJob.jsx";

function Jobs() {
	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-light">Mes expériences</p>
			</div>

			<ul role="list" className="divide-y divide-gray-700 mt-10 sm:mt-16">
				<SingleJob
					imgSrc={SSIADsvg}
					company="SSIAD Hesdin-la-Forêt"
					role="Développment d'un site web"
					stacks="hugo - decapCMS"
					date="Fevrier - mars 2025"
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
		</section>
	);
}

export default Jobs;
