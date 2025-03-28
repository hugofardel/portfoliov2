import React from "react";

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
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-6 mt-20 border-t border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-10 sm:mb-20">
					<p className="text-3xl sm:text-4xl text-primary-light mb-5">Retrouvez moi</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<li className="text-gray-400 hover:text-indigo-400 cursor-pointer rounded-lg bg-ternary-dark hover:bg-gray-100 shadow-sm duration-300">
								<a href={link.url} title={link.title} target="__blank" key={link.id} className="p-4 block">
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
