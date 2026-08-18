import { Github, Linkedin } from "lucide-react";

const socialLinks = [
	{
		id: 1,
		icon: <Github />,
		title: "GitHub",
		url: "https://github.com/hugofardel",
	},
	{
		id: 2,
		icon: <Linkedin />,
		title: "LinkedIn",
		url: "https://www.linkedin.com/in/hugo-fardel-6414601b4/",
	},
];

function Socials() {
	return (
		<div id="socials" className="container mx-auto">
			<div className="pt-5 sm:pt-10 pb-6 sm:mt:1 mb-8 py-5 sm:py-10 mt-15 sm:mt-24">
				<div className="flex flex-col justify-center items-center mb-10 sm:mb-20">
					<h2>Retrouvez-moi</h2>
					<ul className="flex gap-4 sm:gap-8 mt-5">
						{socialLinks.map((link) => (
							<li key={link.id} className="text-gray-400 hover:text-primary cursor-pointer rounded-xl bg-card hover:bg-primary/10 hover:border-primary/30 border border-border/60 shadow-sm duration-300 transition-all hover:-translate-y-0.5">
								<a href={link.url} title={link.title} target="_blank" className="p-4 block">
									<i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Socials;
