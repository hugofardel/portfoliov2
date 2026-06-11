import Socials from "@/layout/Socials";
import { Outlet } from "react-router";

function AppLayout() {
    return (
        <div className="container mx-auto">
            {/* <Navbar /> */}
            <Outlet />
            <Socials />
        </div>
    )
}

export default AppLayout;