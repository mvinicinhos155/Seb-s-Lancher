import { RiPixFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import "../css/Index.css";

function ComponentPedidos() {
  const [pedido, setPedido] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getPedido = async () => {
      const response = await fetch("https://api-lancher.onrender.com/user_pedido", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      console.log(data.GetAllUserPedidos);
      setPedido(data.GetAllUserPedidos);
    };

    getPedido();
  }, []);

  return (
    <div className="container_prdidos">
      <div className="title_pedido">
        <h1>Pedidos</h1>
      </div>
      <div className="pedidos">
        {Array.isArray(pedido) &&
          pedido.flatMap((p) => (
            <div className="pedido" key={p.id}>
              <div className="status">
                <span>Pedido: {p.status}</span>
              </div>
              <div className="element_pedido">
                {p.produtos?.map((item) => (
                  <h3 key={item.id}>
                    Produto: <span>{item.produto.name_product} - R$ {item.price}</span>
                  </h3>
                ))}
                <h3>Pago pelo:</h3>
                <p>Pix <RiPixFill /></p>
              </div>
              <div className="total_pedido">
                  <h3>Total:{" "}</h3>
                  <span>R$ {p.produtos?.reduce((acc, item) => {
                    return acc + Number(item.price);
                  }, 0)}</span>
                  
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ComponentPedidos;
