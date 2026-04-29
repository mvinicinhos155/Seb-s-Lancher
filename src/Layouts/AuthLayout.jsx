import { Outlet } from "react-router-dom";
import NavbarFree from "../components/public/NavbarFree";
function AuthLayout () {
    return (
        <>
            <NavbarFree/>
            <Outlet/>
        </>
    )
}

export default AuthLayout;