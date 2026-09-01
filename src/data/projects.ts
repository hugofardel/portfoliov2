import mastermindImg from "@/assets/mastermind2.png";
import systemdevImg from "@/assets/systemdev.png";
import xtradeImg from "@/assets/xtrade.png";
import blueprintImg from "@/assets/blueprint.png";

export type Project = {
	id: string;
	icon: string;
	name: string;
	text: string;
	link: string;
};

export const projects: Project[] = [
	{
		id: "mastermind",
		icon: mastermindImg,
		name: "Mastermind",
		text: "React",
		link: "https://mastermind.hugo-fardel.fr/",
	},
	{
		id: "systemdev",
		icon: systemdevImg,
		name: "Systemdev",
		text: "React / Tailwind",
		link: "https://systemdev.hugo-fardel.fr",
	},
	{
		id: "blueprint",
		icon: blueprintImg,
		name: "Blueprint",
		text: "Nextjs / Tailwind / Drizzle",
		link: "https://blueprint.hugo-fardel.fr/",
	},
];
