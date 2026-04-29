import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { getUserFromToken } from "../middleware/auth";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function ComponentNavMobile () {

    const [ abertoPerfil, setAbertoPerfil ] = useState(false);
    const user = getUserFromToken();
    const navigate = useNavigate();

    function removeToken() {
    localStorage.removeItem("token");
    localStorage.removeItem("product");
    localStorage.removeItem("total")
    setTimeout(() => {
      navigate("/home");
    }, 5000);
  }

    return (
        <div className="container_mobile">
            <div className="mobile">
                <NavLink className="routes" to="/">
                    <IoHome/>
                    <span>HOME</span>
                </NavLink>
                <NavLink className="routes" to="/pizza">
                   <IoMdMenu/> 
                   <span>MENU</span> 
                </NavLink>
                <NavLink className="routes" to="/cart">
                   <FaShoppingCart/> 
                   <span>CARRINHO</span> 
                </NavLink>
                <NavLink className="routes" onClick={() => setAbertoPerfil(true)}>
                   <FaUser />
                    <span>PERFIL</span>
                </NavLink>
            </div>
            {abertoPerfil && (
                <div className="overlay_mobile" onClick={() => setAbertoPerfil(false)}>
                    <div className="modal_mobile" onClick={(e) => e.stopPropagation()}>
                        {user?.role !== "ADMIN" &&
                        <div className="A">
                            <NavLink to="/pedido" className="route">
                                <span>Pedidos</span>
                            </NavLink> 
                            <NavLink className="route">
                                <span onClick={removeToken}>Sair</span>
                            </NavLink> 
                        </div>
                        
                        }
                        {user?.role === "ADMIN" && 
                            <div className="A">
                                <NavLink to="/pedidos" className="route">
                                    <span>Pedidos</span>
                                </NavLink>
                                <NavLink to="/add_product" className="route">
                                    <span>Adicionar Produto</span>
                                </NavLink>
                                <NavLink to="/remover_product" className="route">
                                    <span>Deletar Produto</span>
                                </NavLink>
                                <NavLink className="route">
                                    <span onClick={removeToken}>Sair</span>
                                </NavLink>
                            </div>
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

export default ComponentNavMobile;