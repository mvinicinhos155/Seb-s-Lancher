import { NavLink } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa6";
import { RiDrinks2Fill } from "react-icons/ri";
import { IoIceCream } from "react-icons/io5";
import ComponentPizzaFree from "./public/ComponentPizzaFree";
import "../css/Menu.css"

function  ComponetMenu () {
    return (
        <div className="container_menu">
            <div className="conteudo">
                <NavLink to="/pizza" className={({ isActive}) => isActive ? "link navActive" : "navLink"}>
                    <div className="page">
                        <FaPizzaSlice className={({ isActive}) => isActive ? "link navActive" : "navLink"}/>
                        <span>Pizza</span>
                    </div>
                </NavLink>
                <NavLink to="/burger" className={({ isActive}) => isActive ? "link navActive" : "navLink"}>
                    <div className="page">
                        <FaHamburger className="lancher"/>
                        <span>Hambúrguer</span>
                    </div>
                </NavLink>
                <NavLink to="/drink" className={({ isActive}) => isActive ? "link navActive" : "navLink"}>
                    <div className="page">
                        <RiDrinks2Fill className="lancher"/>
                        <span>Bebida</span>
                    </div>
                </NavLink>
                <NavLink to="/icecream" className={({ isActive}) => isActive ? "link navActive" : "navLink"}>
                    <div className="page">
                        <IoIceCream className="lancher"/>
                        <span>Sorvete</span>
                    </div>
                </NavLink>
            </div>
        </div>
    )  
}

export default ComponetMenu;