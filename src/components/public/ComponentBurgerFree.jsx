import { GoPlusCircle } from "react-icons/go";
import { useState, useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import ComponetMenuFree from "../../components/public/ComponentMenuFree";
import ComponentFooter from "../ComponentFooter";
import Img from "../../assets/chocolate.jpg";
import "../../css/Index.css";

function ComponentBurgerFree() {
  const [Product, setProduct] = useState([]);
  const [Aberto, setAberto] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://api-lancher.onrender.com/products");
      if (!response.ok) {
        console.log("Erro com banco de dados");
      }
      const data = await response.json();
      setProduct(data.products);
    };

    getProduct();
  }, []);

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
    <div>
      <ComponetMenuFree />
      <div className="container_index">
        <div className="cards_index">
          {Array.isArray(Product) &&
            Product.filter((c) => c.categoria === "hambúrgue").map((p) => (
              <div key={p.id} className="card_index" onClick={() => setAberto(true)}>
                <div className="img_index">
                  <img src={p.img} alt="img" />
                </div>
                <div className="about_index">
                  <h1>{p.name_product}</h1>
                  <p>{p.about}</p>
                </div>
                <div className="priceAndbutton_index">
                  <div className="price">
                    <h2>{p.price}</h2>
                  </div>
                  <div className="button_index">
                    <button>
                      <GoPlusCircle />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {Aberto && (
            <div className="overlay" onClick={() => setAberto(false)}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="fechar">
                  <button onClick={() => setAberto(false)}>
                    <TiDelete />
                  </button>
                </div>
                <div className="element">
                  <p>Para visualizar o produto, faça login ou cadastra-se.</p>
                  <button id="login" onClick={pgLogin}>
                    Login
                  </button>
                  <p>ou</p>
                  <button id="cadastro" onClick={pgCadastro}>
                    Cadastro
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <ComponentFooter/>
    </div>
  );
}

export default ComponentBurgerFree;
