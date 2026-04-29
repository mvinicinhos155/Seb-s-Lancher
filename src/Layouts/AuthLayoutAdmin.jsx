import { Outlet } from "react-router-dom";
import ComponentAdmin from "../components/ComponentAdmin";
import "../css/Index.css";

function AuthLayoutAdmin() {
    return (
        <div className="container_admin">
            <ComponentAdmin/>
            <div className="content">
              <Outlet/>  
            </div>
            
        </div>
    )
}

export default AuthLayoutAdmin;