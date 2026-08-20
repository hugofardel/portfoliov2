import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Jobs from "./sections/Jobs";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Socials from "./sections/Socials";
import Stack from "./sections/Stack";

function App() {
	return (
		<div className="container mx-auto">
			<Hero />
			<Services />
			<Jobs />
			<Projects />
			<Stack />
			<Contact />
			<Socials />
		</div>
	);
}

export default App;
