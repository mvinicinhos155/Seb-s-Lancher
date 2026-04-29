import { GoPlusCircle } from "react-icons/go";
import { useState, useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import ComponetMenu from "../components/ComponentMenu";
import ComponentFooter from "../components/ComponentFooter";
import "../css/Index.css";
import CartComponent from "./CartComponent";
import ComponentNavMobile from "./ComponentNavMobile";

function ComponentIceCream() {

  const [Product, setProduct] = useState([]);


  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://api-lancher.onrender.com/products");
      if (!response.ok) {
        console.log("Erro com banco de dados");
      }

      const data = await response.json();
      console.log(data.products);
      setProduct(data.products);
    };

    getProduct();
  }, []);

  function SalveProduct(p) {
    const produtoStarage = localStorage.getItem("product");

    let produtos;

    const parsed = produtoStarage ? JSON.parse(produtoStarage) : [];

    produtos = Array.isArray(parsed) ? parsed : [];

    produtos.push(p);

    localStorage.setItem("product", JSON.stringify(produtos));
  }


  return (
    <div>
      <div className="container_index">
        <div className="cards_index">
          {Array.isArray(Product) &&
            Product.filter((c) => c.categoria === "sorvete").map((p) => (
              <div key={p.id} className="card_index">
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
                    <button onClick={() => SalveProduct(p)}>
                      <GoPlusCircle />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <CartComponent/>
        </div>
        <ComponentNavMobile/>
      </div>
      <ComponentFooter/>
    </div>
  );
}

export default ComponentIceCream;
