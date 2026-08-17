import developerDark from "@/assets/developer-dark.svg";
import { ArrowDown } from "lucide-react";

function Hero() {
	return (
		<section className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2">
			<div className="w-full md:w-2/5 text-left">
				<h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-center sm:text-left text-foreground uppercase">
					Hugo Fardel
				</h1>
				<p className="font-medium mt-4 text-lg md:text-xl lg:text-2xl text-center sm:text-left leading-normal text-muted-foreground">
					Développeur front-end React
				</p>
				<div className="flex justify-center sm:block">
					<a
						href="#contact"
						className="flex justify-center items-center w-fit mt-6 sm:mt-12 p-2.5 sm:p-3 cursor-pointer font-medium text-lg border border-border shadow-lg rounded-lg bg-primary text-primary-foreground focus:ring-1 focus:ring-primary/10 hover:bg-primary/50 duration-500"
					>
						<span className="text-sm sm:text-lg duration-100">Me contacter</span>
						<ArrowDown className="ml-2 sm:ml-3 h-4 w-4 sm:w-5 sm:h-5 duration-100" />
					</a>
				</div>
			</div>
			<div className="w-full sm:w-3/5 text-right float-right mt-8 sm:mt-0">
				<img src={developerDark} alt="Illustration dev" loading="eager" fetchPriority="high" />
			</div>
		</section>
	);
}

export default Hero;
