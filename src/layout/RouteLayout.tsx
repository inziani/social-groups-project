import { Outlet } from "react-router-dom";
import NavBar from "../components/admin/NavBar";

export function RouteLayout() {
    return (
         <div>
            <NavBar />
            <div className="container">
            <Outlet />
            </div>
         </div>
    )
}