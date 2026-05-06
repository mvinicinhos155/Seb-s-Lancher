import { FaTrashAlt } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { useState, useEffect } from "react";
import ComponentNavMobile from "../components/ComponentNavMobile";

function AdminPageRemove () {

    const [ produto, setProduto ] = useState([]);
    const [  produtoID, setProdutoID ] = useState("");
    const [ aberto, setAberto ] = useState(false);

    useEffect(() => {
        const getProduto = async () => {
            const response = await fetch("https://api-lancher.onrender.com/products");
                if(!response) {
                    return console.log("Erro ao pegar produtos");
                }
            
                const data = await response.json();
                setProduto(data.products);
        }

        getProduto()
    }, []);

    

   function handlerProdutoId(item) {
  localStorage.setItem("produtoID", JSON.stringify(item));
  const p = JSON.parse(localStorage.getItem("produtoID"));

  setProdutoID(p.id);
}

async function DeleteProduto() {
    const token =  localStorage.getItem("token");
    const response = await fetch(`https://api-lancher.onrender.com/delProduct/${produtoID}`, {
        method: "DELETE",
        headers: { "Authorization" : `Bearer ${token}`}
    });
        if(!response.ok) {
            return console.log("Erro ao excluir produto")
        }

    alert("Produto deletado X")
    setAberto(false);
    setProduto((prev) => prev.filter((p) => p.id !== produtoID));
}


    return (
        <div className="container_delete_produto">
            <div className="title_delete_produto">
                <h1>Deletar Produto</h1>
            </div>
            <div className="cards_admin_products">
                {Array.isArray(produto) && 
                 produto.map((item) => (
                    <div className="card_admin_product" key={item.id}>
                        <div className="img_index">
                            <img src={item.img} alt="produto" />
                        </div>
                        <div className="about_index">
                            <h1>{item.name_product}</h1>
                            <p>{item.about}</p>
                        </div>
                        <div className="priceAndbutton_admin">
                            <div className="button_admin" onClick={() => setAberto(true)}>
                                <button onClick={() => handlerProdutoId(item)} >
                                <FaTrashAlt/>
                                </button>
                            </div>
                            <div className="price_admin">
                                <h2>R$ {item.price}</h2>
                            </div>
                        </div>
                    </div>
                 ))} 
                 {aberto && (
                    <div className="overlay_admin" onClick={() => setAberto(false)}>
                        <div className="modal_admin" onClick={(e) => e.stopPropagation()}>
                            <div className="fechar_admin">
                                <button onClick={() => setAberto(false)}><TiDelete/></button>
                            </div>
                            <span>Certeza que deseja excluir esse Produto?</span>
                            <button onClick={DeleteProduto}>Confirmar</button>
                        </div>
                    </div>
                 )}
            </div>
            <ComponentNavMobile/>
        </div>
    )
}

export default AdminPageRemove;