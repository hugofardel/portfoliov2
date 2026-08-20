import developerDark from "@/assets/developer-dark.svg";
import { ArrowDown } from "lucide-react";

function Hero() {
	return (
		<section className="relative flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2">
			<div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/8 blur-[120px] pointer-events-none" />

			<div className="relative w-full md:w-2/5 text-left">
				<div className="inline-block mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide">
					Développeur front-end
				</div>
				<h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-center sm:text-left uppercase leading-tight">
					<span className="bg-gradient-to-r from-foreground via-foreground to-primary/70 bg-clip-text text-transparent">
						Hugo Fardel
					</span>
				</h1>
				<p className="font-medium mt-4 text-lg md:text-xl lg:text-2xl text-center sm:text-left leading-normal text-gray-400">
					React <span className="text-primary/60 mx-1">/</span> TypeScript{" "}
					<span className="text-primary/60 mx-1">/</span> Tailwind
				</p>
				<div className="flex justify-center sm:block">
					<a
						href="#contact"
						className="group flex justify-center items-center w-fit mt-6 sm:mt-12 gap-2.5 px-6 py-3 cursor-pointer font-semibold text-lg rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary/80 active:scale-[0.98] transition-all duration-300"
					>
						Me contacter
						<ArrowDown className="h-4 w-4 sm:w-5 sm:h-5 duration-300 group-hover:translate-y-0.5" />
					</a>
				</div>
			</div>
			<div className="w-full sm:w-3/5 text-right float-right mt-8 sm:mt-0">
				<img
					src={developerDark}
					alt="Illustration dev"
					loading="eager"
					fetchPriority="high"
				/>
			</div>
		</section>
	);
}

export default Hero;
