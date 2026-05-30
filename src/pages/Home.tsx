import Navbar from "@/layout/Navbar";
import Hero from "@/sections/Hero";
import Jobs from "@/sections/Jobs";
import Projects from "@/sections/Projects";
import Socials from "@/sections/Socials";
import Stack from "@/sections/Stack";

function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			{/* <Prices /> */}
			<Jobs />
			<Projects />
			<Stack />
			{/* <Contact /> */}
			<Socials />
		</>
	);
}

export default Home;
