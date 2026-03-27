import Hero from "@/sections/Hero.jsx";
import Jobs from "@/sections/Jobs.jsx";
import Projects from "@/sections/Projects.jsx";
import Socials from "@/sections/Socials.jsx";
import Stack from "@/sections/Stack.jsx";
import Prices from "./sections/prices";

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
