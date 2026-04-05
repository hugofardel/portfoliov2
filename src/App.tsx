import Hero from "@/sections/Hero";
import Jobs from "@/sections/Jobs";
import Projects from "@/sections/Projects";
import Socials from "@/sections/Socials";
import Stack from "@/sections/Stack";
import Prices from "@/sections/Prices";

function App() {
	return (
		<div className="container mx-auto">
			<Hero />
			<Prices />
			<Jobs />
			<Projects />
			<Stack />
			<Socials />
		</div>
	);
}

export default App;
