import React from "react";
import developerDark from "@/assets/developer-dark.svg";
import { ArrowDownToLine } from "lucide-react";

function Hero() {
	return (
		<section className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2">
			<div className="w-full md:w-2/5 text-left">
				<h1 className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-primary-light  uppercase">
					Hugo Fardel
				</h1>
				<p className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-400">
					Développeur front-end React
				</p>
				<div className="flex justify-center sm:block">
					<a
						download="Hugo_Fardel_CV.pdf"
						href="/pdf/Hugo_Fardel_CV.pdf"
						className="font-general-medium flex justify-center items-center min-w-fit w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-ternary-dark p-2.5 sm:p-3 shadow-lg rounded-lg bg-gray-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<ArrowDownToLine className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" />
						<span className="text-sm sm:text-lg font-general-medium duration-100">Télécharger mon CV</span>
					</a>
				</div>
			</div>
			<div className="w-full sm:w-3/5 text-right float-right mt-8 sm:mt-0">
				<img src={developerDark} alt="" />
			</div>
		</section>
	);
}

export default Hero;
