import type { PropsWithChildren } from "react";
import CTA from "../CTA";

interface Props extends PropsWithChildren {
	title: string;
	description: string;
	price: string;
}

function TarifCard({ title, description, price, children }: Props) {
	return (
		<div className="flex flex-col rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-dark p-4 sm:p-8 h-full border border-gray-600">
			<div className="text-lg/6 sm:text-xl/6 font-medium text-white">{title}</div>
			<div className="text-pretty mt-1 text-base/6 text-gray-400">{description}</div>
			<div className="my-12 font-semibold text-gray-300">
				A partir de
				<span className="text-xl/6 sm:text-3xl/6 text-indigo-400">{" " + price}</span>
			</div>
			{children}

			<div className="flex flex-row justify-center flex-1 items-end">
				<CTA className="w-full mb-auto">Demander un devis</CTA>
			</div>
		</div>
	);
}

export default TarifCard;
