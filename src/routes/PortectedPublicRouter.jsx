import { Navigate } from "react-router-dom";


function ProtectedPublicRouter ({ children }) {
    const token = localStorage.getItem("token");

    if(token) {
       return <Navigate to="/" replace/> 
    }

    return children;
}

export default ProtectedPublicRouter;