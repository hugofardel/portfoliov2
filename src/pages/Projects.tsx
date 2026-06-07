import ProjectCard from "@/components/ProjectCard";


import CodeNestImg from "@/assets/codenest.png";
import MastermindImg from "@/assets/mastermind2.png";
import XtradeImg from "@/assets/xtrade.png";

function Projects() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:gap-10">
            <ProjectCard
                icon={MastermindImg}
                name="Mastermind"
                text="React"
                link="https://mastermind.hugo-fardel.fr"
            />
            <ProjectCard
                icon={CodeNestImg}
                name="CodeNest"
                text="React / Storybook"
                link="https://code-nest-nine.vercel.app"
            />
            <ProjectCard icon={XtradeImg} name="XTrade" text="React" link="https://x-trade-hugo-fardel.vercel.app/" />
        </div>
    )
}

export default Projects