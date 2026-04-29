import "../css/Home.css";
import { GoPlusCircle } from "react-icons/go";
import { useEffect, useState } from "react";
import Logo from "../assets/seb's2.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import CartComponent from "../components/CartComponent";
import ComponentNavMobile from "./ComponentNavMobile";

function ComponentHome() {

    const [ produtos, setProdutos ] = useState([]);

    useEffect(() => {
       async function getProduto() {
        const response = await fetch("https://api-lancher.onrender.com/products");
            const data = await response.json();
            setProdutos(data.products)
       }

        getProduto()
    }, [setProdutos]);


    function SalveProduct(p) {
    const produtoStarage = localStorage.getItem("product");

    let produtos;

    const parsed = produtoStarage ? JSON.parse(produtoStarage) : [];

    produtos = Array.isArray(parsed) ? parsed : [];

    produtos.push(p);

    localStorage.setItem("product", JSON.stringify(produtos));
  }

  return (
    <div className="container_home">
      <div className="cards">
        {Array.isArray(produtos) && produtos.map((p) => (
            <div key={p.id} className="card">
                <div className="home_img">
                    <img src={p.img} alt="produto" />
                </div>
                <div className="about">
                    <h1>{p.name_product}</h1>
                    <p>{p.about}</p>
                </div>
                <div className="priceAndbutton">
                <div className="price">
                    <h2>R$ 50.00</h2>
                </div>
                <div className="home_button">
                    <button onClick={() => SalveProduct(p)}><GoPlusCircle/></button>
                </div>
            </div>  
            </div>
        ))}
            <CartComponent/>
            <ComponentNavMobile/>
      </div>
      <footer className="footer">
        <div className="footer_img">
            <img src={Logo} alt="logo" />
        </div>
        <div className="barra"></div>
        <div className="footer_redes">
            <h2>Acompanhe nossas redes social</h2>
            <div className="rede">
                <a href=""><RiInstagramFill/></a>
                <a href=""><FaYoutube/></a>
                <a href=""><FaFacebook/></a>
                <a href=""><FaTwitter/></a>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default ComponentHome;
