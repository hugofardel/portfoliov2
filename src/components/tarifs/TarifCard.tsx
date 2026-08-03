import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import CTA from "../CTA";

interface Props {
	title: string;
	description: string;
	price: string;
}

function TarifCard({ title, description, price, className, children }: Props & ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"flex flex-col rounded-xl shadow-lg cursor-pointer mb-10 sm:mb-0 bg-card p-4 sm:p-8 h-full border border-border",
				className,
			)}
		>
			<div className="text-lg/6 sm:text-xl/6 font-medium text-white">{title}</div>
			<div className="text-pretty mt-1 text-base/6 text-gray-400">{description}</div>
			<div className="my-12 font-semibold text-gray-300">
				A partir de
				<span className="text-xl/6 sm:text-3xl/6 text-primary">{" " + price}</span>
			</div>
			{children}

			<div className="flex flex-row justify-center flex-1 items-end">
				<CTA to="/" className="w-full mb-auto" href="#socials">
					Demander un devis
				</CTA>
			</div>
		</div>
	);
}

export default TarifCard;
