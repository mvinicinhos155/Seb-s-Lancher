import "../../css/Home.css";
import { GoPlusCircle } from "react-icons/go";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/seb's2.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

function ComponentHomeFree() {

    const [ produtos, setProdutos ] = useState([]);
    const [ aberto, setAberto ] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
       async function getProduto() {
        const response = await fetch("https://api-lancher.onrender.com/products");
            const data = await response.json();
            setProdutos(data.products)
       }

        getProduto()
    }, [setProdutos]);

    function pgLogin () {
        setTimeout(() => {
            navigate("/login");
        }, 1000)
    }

    function pgCadastro () {
        setTimeout(() => {
            navigate("/cadastro");
        }, 1000)
    }

  return (
    <div className="container_home">
      <div className="cards">
        {Array.isArray(produtos) && produtos.map((p) => (
            <div key={p.id} className="card" onClick={() => setAberto(true)}>
                <div className="home_img">
                    <img src={p.img} alt="produto" />
                </div>
                <div className="about">
                    <h1>{p.name_product}</h1>
                    <p>{p.about}</p>
                </div>
                <div className="priceAndbutton">
                <div className="price">
                    <h2>R$ {p.price}</h2>
                </div>
                <div className="home_button">
                    <button><GoPlusCircle/></button>
                </div>
            </div>  
            </div>
        ))}
        {aberto && (
            <div className="overlay" onClick={() => setAberto(false)}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div className="fechar">
                        <button onClick={() => setAberto(false)}><TiDelete/></button>
                    </div>
                    <div className="element">
                        <p>Para visualizar o produto, faça login ou cadastra-se.</p>
                        <button id="login" onClick={pgLogin}>Login</button>
                        <p>ou</p>
                        <button id="cadastro" onClick={pgCadastro}>Cadastro</button>
                    </div>
                </div>
            </div>
        )}
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

export default ComponentHomeFree;
