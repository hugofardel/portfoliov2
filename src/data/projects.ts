import mastermindImg from "@/assets/mastermind2.png";
import systemdevImg from "@/assets/systemdev.png";
import xtradeImg from "@/assets/xtrade.png";

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
		id: "xtrade",
		icon: xtradeImg,
		name: "Xtrade",
		text: "React",
		link: "https://x-trade-hugo-fardel.vercel.app/",
	},
];
