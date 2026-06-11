import mastermindImg from "@/assets/mastermind2.png";

function ProjectDetailPage() {
    return (
        <div
            style={{ backgroundImage: `url(${mastermindImg})` }}
            className="
            -z-1
            pb-18 pt-35 
            absolute top-0 left-0
            w-full h-75
            bg-cover bg-center overflow-hidden
            before:content-['']
            before:absolute
            before:inset-0
            before:bg-[linear-gradient(to_top,var(--color-background),#1f2235e6_40%,#1f2235e6)]
  "
        >
            {/* <img src={MastermindImg} alt="banner" className="h-100 w-full object-cover" style={{ viewTransitionName: "test-image" }} /> */}
            <h1>Mastermind</h1>
        </div>
    )
}

export default ProjectDetailPage;