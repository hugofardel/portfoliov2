import Hero from "@/features/home/components/Hero";
import Jobs from "@/features/home/components/Jobs";
import Projects from "@/features/home/components/Projects";
import Services from "@/features/home/components/Services";
import Stack from "@/features/home/components/Stack";

function HomePage() {
    return (
        <>
            <Hero />
            <Services />
            <Jobs />
            <Projects />
            <Stack />
        </>
    );
}

export default HomePage;