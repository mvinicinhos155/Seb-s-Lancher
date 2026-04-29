import { useState, useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Navigate, useNavigate } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";
import Test from "../assets/chocolate.jpg";
import "../css/Cart.css";
import ComponentNavMobile from "./ComponentNavMobile";

function ComponentCarrinho() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    function GetProducts() {
      const produto = localStorage.getItem("product");

      const data = produto ? JSON.parse(produto) : [];

      setProduct(Array.isArray(data) ? data : [data]);
      console.log(Array.isArray(data) ? data : [data]);
    }

    GetProducts();
  }, []);

  async function handdlerPedido() {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch("http://localhost:3000/pedido", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.error("Erro ao criar pedido");
      return;
    }

    const data = await response.json();
    const pedidoId = data.pedido.id; 
    console.log(pedidoId)

    console.log("Pedido criado:", pedidoId);

    const produtos = JSON.parse(localStorage.getItem("product")) || [];

    const body = produtos.map((item) => ({
      pedido_id: pedidoId,
      product_id: item.id,
      quantidade: Number(item.qtd) || 1,
      price: Number(item.price),
    }));

    console.log(body)

    await fetch("https://api-lancher.onrender.com/pedido_produto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(body)
    });

    alert("Pedido realizado com sucesso 🔥");
    navigate("/pix")

    localStorage.removeItem("product");

  } catch (error) {
    console.error("Erro geral:", error);
  }
}

  const ValoTotal = product.reduce((acc, item) => {
    return acc + Number(item.price) * (item.qtd || 1);
  }, 0);

  localStorage.setItem("total" , ValoTotal);

  function DeleteProduct(id) {
    const produto = localStorage.getItem("product");
    let produtos = produto ? JSON.parse(produto) : [];

    const item = produtos.find((p) => p.id === id);

    if (item && item.qtd > 1) {
      item.qtd -= 1;
    } else {
      produtos = produtos.filter((p) => p.id !== id);
    }

    localStorage.setItem("product", JSON.stringify(produtos));
    setProduct(produtos);
  }

  return (
    <div className="component_cart">
      <div className="product_title">
        <h1>Carrinho</h1>
        <FaCartShopping id="cart" />
      </div>
      <div className="product_cart">
        {product.map((p) => (
          <div className="cards_cart">
            <div className="img_cart">
              <img src={p.img} alt="img" />
            </div>
            <div className="about_cart">
              <h1>{p.name_product}</h1>
              <p>{p.about}</p>
            </div>
            <div className="price_cart">
              <div id="price">
                <span>
                  <FaTrashCan onClick={() => DeleteProduct(p.id)} />
                </span>
                <h3>R$ {p.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="buttom_cart">
        <div className="title_total">
          <h1>Total:</h1>
          <h3>R$ {ValoTotal.toFixed(2)}</h3>
        </div>
        <div className="price_total">
          <button onClick={handdlerPedido}>Finalizar</button>
        </div>
      </div>
      <ComponentNavMobile/>
    </div>
  );
}

export default ComponentCarrinho;
