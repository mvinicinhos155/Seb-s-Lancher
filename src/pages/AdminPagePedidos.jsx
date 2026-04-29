import "../css/Admin.css";
import { RiPixFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import ComponentNavMobile from "../components/ComponentNavMobile";

function AdminPagePedidos () {

    const [ pedidos, setPedidos ] = useState([]);

    useEffect(() => {
        const getPedidos =  async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await fetch("https://api-lancher.onrender.com/pedidos", {
                    headers: { "Authorization" : `Bearer ${token}`}
                });
                    if(!response.ok) {
                        return console.log("Erro ao pegar os pedidos");
                    }

                const data =  await response.json();
                setPedidos(data.GetPedidos);
            } catch (err) {
                console.error(err);
            }
        }

        getPedidos()
    }, []);

    return (
        <div className="container_pedido">
            <div className="title_admin">
                <h1>Pedidos</h1>
            </div>
            <div className="pedidos_admin">
                {Array.isArray(pedidos) && 
                    pedidos.flatMap((p) => (
                        <div className="card_pedido" key={p.id}>
                            <div className="status">
                                <span>Estado: {p.status}</span>
                            </div>
                            <div className="produtos_admin">
                                {p.produtos?.map((item) => (
                                    <h3 key={item.id}>
                                        Produtos: {item.produto.name_product} - R$ {item.price}
                                    </h3>
                                ))}
                            </div>
                            <h3>Pago pelo:</h3>
                            <p>Pix <RiPixFill /></p>
                            <div className="total_pedido">
                                <h3>Total:{" "}</h3>
                                <span>R$ {p.produtos?.reduce((acc, item) => {
                                    return acc + Number(item.price);
                                }, 0)}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
              <ComponentNavMobile/>  
        </div>
    )
}

export default AdminPagePedidos;