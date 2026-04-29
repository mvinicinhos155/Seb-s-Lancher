import { Navigate } from "react-router-dom";
import { getUserFromToken } from "../middleware/auth";

function AdminRoute({ children }) {
    const user = getUserFromToken();

    if(!user || user.role !== "ADMIN") {
        return <Navigate to="/"/>
    };

    return children;
}

export default AdminRoute;