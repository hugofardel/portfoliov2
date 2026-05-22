import Hero from "@/sections/Hero";
import Jobs from "@/sections/Jobs";
import Prices from "@/sections/Prices";
import Projects from "@/sections/Projects";
import Socials from "@/sections/Socials";
import Stack from "@/sections/Stack";

function Home() {
	return (
		<div className="container mx-auto">
			<Hero />
			<Prices />
			<Jobs />
			<Projects />
			<Stack />
			{/* <Contact /> */}
			<Socials />
		</div>
	);
}

export default Home;
