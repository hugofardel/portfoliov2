import { Github, Linkedin, type LucideIcon } from "lucide-react";

export type Social = {
	id: string;
	icon: LucideIcon;
	title: string;
	url: string;
};

export const socials: Social[] = [
	{
		id: "github",
		icon: Github,
		title: "GitHub",
		url: "https://github.com/hugofardel",
	},
	{
		id: "linkedin",
		icon: Linkedin,
		title: "LinkedIn",
		url: "https://www.linkedin.com/in/hugo-fardel-6414601b4/",
	},
];
