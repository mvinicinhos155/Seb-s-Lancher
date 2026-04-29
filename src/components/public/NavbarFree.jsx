import Logo from "../../assets/seb's.png";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../../css/Navbar.css";

function NavbarFree() {
  const [aberto, setAberto] = useState(false);
  const navigate = useNavigate();

  function pgLogin() {
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }

  function pgCadastro() {
    setTimeout(() => {
      navigate("/cadastro");
    }, 1000);
  }

  return (
    <nav className="container_navbar">
      <div className="nav_left">
        <div className="nav_img">
          <img src={Logo} alt="logo" id="img" />
        </div>
        <div className="menu">
            <NavLink to="/home"
            className={({ isActive }) => isActive ? "link active" : "link"}>
                HOME
            </NavLink>
            <NavLink to="/pizza_public"
            className={({ isActive }) => isActive ? "link active" : "link"}
            end={false}>
                MENU
            </NavLink>
        </div>
      </div>
      <div className="nav_right">
        <div className="user" onClick={() => setAberto(true)}>
          <span>
            <FaUser />
          </span>
          <span>Login ou cadastra-se</span>
        </div>
      </div>

      {aberto && (
        <div className="overlay_navbar" onClick={() => setAberto(false)}>
          <div className="modal_navbar" onClick={(e) => e.stopPropagation()}>
            <div className="fechar-navbar">
              <button onClick={() => setAberto(false)}>
                <TiDelete />
              </button>
            </div>
            <div className="element_navbar">
              <p>Não perca tempo, faça já seu login</p>
              <button id="login_navbar" onClick={pgLogin}>
                Login
              </button>
              <p>ou faça já seu cadastro</p>
              <button id="cadastro_navbar" onClick={pgCadastro}>
                Cadastro
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavbarFree;
