import { Github, Linkedin } from "lucide-react";

const socialLinks = [
	{
		id: 1,
		icon: <Github />,
		title: "Github",
		url: "https://github.com/hugofardel",
	},
	{
		id: 2,
		icon: <Linkedin />,
		title: "Linkedin",
		url: "https://www.linkedin.com/in/hugo-fardel-6414601b4/",
	},
];

function Socials() {
	return (
		<div id="socials" className="container mx-auto">
			<div className="pt-5 sm:pt-10 pb-6 sm:mt:1 mb-8 py-5 sm:py-10 mt-5 sm:mt-24">
				{/* Footer social links */}
				<div className="flex flex-col justify-center items-center mb-10 sm:mb-20">
					<h2>Retrouvez moi</h2>
					<ul className="flex gap-4 sm:gap-8 mt-5">
						{socialLinks.map((link) => (
							<li key={link.id} className="text-gray-400 hover:text-primary cursor-pointer rounded-lg bg-card hover:bg-gray-100 shadow-sm duration-300">
								<a href={link.url} title={link.title} target="__blank" className="p-4 block">
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
