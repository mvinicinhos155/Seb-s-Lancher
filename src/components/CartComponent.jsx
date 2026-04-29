import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../css/Cart.css"

function CartComponent () {

    return (
        <div >
            <NavLink to="/cart" className="cart">
                <FaShoppingCart/>
            </NavLink>
        </div>
    )
}

export default CartComponent;