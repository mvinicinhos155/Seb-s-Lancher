import { NavLink } from "react-router-dom";
import "../css/Admin.css"

function ComponentAdmin () {
    return (
       <div className="component_admin">
            <h1>Pagina Admin</h1>
            <div className="function">
                <NavLink to="/pedidos" 
                className={({ isActive }) => (isActive ? "link navlink" : "devlink")}>
                    <span>Pedidos</span>
                </NavLink>
                <NavLink to="/add_product"
                className={({ isActive }) => isActive ? "link navlink" : "devlink"}>
                    <span>Adicionar Produto</span>
                </NavLink>
                <NavLink to="/remover_product" 
                className={({ isActive }) => isActive ? "link navlink" : "devlink"}>
                    <span>Deletar Produto</span>
                </NavLink>
            </div>
       </div>
    )
}

export default ComponentAdmin;