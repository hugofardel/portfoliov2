import developerDark from "@/assets/developer-dark.svg";
import CTA from "@/components/CTA";
import { ArrowDownToLine } from "lucide-react";

function Hero() {
	return (
		<section className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2">
			<div className="w-full md:w-2/5 text-left">
				<h1 className="font-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-foreground uppercase">
					Hugo Fardel
				</h1>
				<p className="font-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-muted-foreground">
					Développeur front-end React
				</p>
				<div className="flex justify-center sm:block">
					<CTA
						className="w-fit"
						download="Hugo_Fardel_CV.pdf"
						href="/pdf/Hugo_Fardel_CV.pdf"
						aria-label="Download Resume"
					>
						<ArrowDownToLine className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" />
						<span className="text-sm sm:text-lg duration-100">Télécharger mon CV</span>
					</CTA>
				</div>
			</div>
			<div className="w-full sm:w-3/5 text-right float-right mt-8 sm:mt-0">
				<img src={developerDark} alt="Illustration dev" loading="eager" fetchPriority="high" />
			</div>
		</section>
	);
}

export default Hero;
