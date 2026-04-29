import Logo from "../assets/seb's.png";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getUserFromToken } from "../middleware/auth";
import "../css/Navbar.css";

function Navbar() {
  const  user = getUserFromToken();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [ name, setName ] = useState("")

  function removeToken() {
    localStorage.removeItem("token");
    localStorage.removeItem("product");
    localStorage.removeItem("total")
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }

  useEffect(() => {
        const token = localStorage.getItem("token");

      if (token) {
        try {
          const decoded = jwtDecode(token);
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setName(decoded.name);
        } catch (error) {
          console.log("Token inválido", error);
        }
      } else {
        console.log("Nenhum token encontrado");
      }
  }, [])

  return (
    <nav className="container_navbar">
      <div className="nav_left">
        <div className="nav_img">
          <img src={Logo} alt="logo" id="img" />
        </div>
        <div className="menu">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            HOME
          </NavLink>
          <NavLink
            to="/pizza"
            className={({ isActive }) => (isActive ? "link active" : "link")}>
            MENU
          </NavLink>
        </div>
      </div>
      <div className="nav_right">
        <div className="user" onClick={() => setOpen(!open)}>
          <span>
            <FaUser />
          </span>
          <h3>{name}</h3>
        </div>
        {open && (
          <div className="perfil">
            {user?.role !== "ADMIN" &&
             <NavLink to="/pedido">
                <span>pedido</span>
              </NavLink>
            }
            {user?.role === "ADMIN" && 
              <NavLink to="/pedidos">
                <span>Admin</span>
              </NavLink>
            }
    
            <span onClick={removeToken}>Sair</span>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
