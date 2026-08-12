import CTA from "@/components/CTA";
import { Link } from "react-router";

function Navbar() {
    return (
        <nav className="flex items-center my-6 justify-end">
            <ul className="flex items-center justify-end gap-8">
                <li>
                    <Link to="/projects" className="uppercase font-medium text-sm text-muted-foreground">Projets</Link>
                </li>

                <li>
                    <CTA className="text-sm" to="/projects">Me contacter</CTA>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;