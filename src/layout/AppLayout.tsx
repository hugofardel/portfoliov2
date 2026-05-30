import { Outlet } from "react-router";

function AppLayout() {
    return (
        <div className="container mx-auto">
            <Outlet />
        </div>
    )
}

export default AppLayout;