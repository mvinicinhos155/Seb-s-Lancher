import { useState } from "react";
import ComponentNavMobile from "../components/ComponentNavMobile";

function AdminPageAdd () {

    const [ name_product, setName_Product ] = useState("");
    const [ price,  setPrice ] = useState("");
    const [ about, setAbout ] = useState("")
    const [ categoria, setCategoria ] = useState("");
    const [ img, setImg ] = useState(null);

    async function handlerSubmit (e) {
        e.preventDefault();

        const token = localStorage.getItem("token");

        const response = await fetch("https://api-lancher.onrender.com/product",{
            method: "POST",
            headers: { "Content-Type" : "application/json", "Authorization" : `Bearer ${token}`},
            body: JSON.stringify({ 
                name_product,
                price,
                about,
                categoria,
                img 
            }),
        });
            if(!response.ok) {
                return console.log("Erro ao criar produto");
            };

        const data = await response.json();
        console.log(data)
        
        alert("Produto criado com sucesso");
        setName_Product("");
        setPrice("");
        setAbout("");
        setCategoria("");
        setImg("")
    }

    return (
        <div className="container_add_produto">   
            <div className="title_add_produto">
                <h1>Add Produto</h1>
            </div>
            <form className="input_add_produto" onSubmit={handlerSubmit}>
                <input type="text" placeholder="Nome do produto" value={name_product} onChange={(e) => setName_Product(e.target.value)}/>
                <input type="number" placeholder="Preço do produto" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <input type="text" placeholder="Sobre o produto" value={about} onChange={(e) => setAbout(e.target.value)}/>
                <select id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="pizza">Pizza</option>
                    <option value="hambúrgue">Hambúrgue</option>
                    <option value="bebida">Bebida</option>
                    <option value="sorvete">Sorvete</option>
                </select>
                <input type="file" accept="image/*" id="file" value={img} onChange={(e) => setImg(e.target.value)}/>
                <div className="button">
                    <button type="submit">Enviar</button>
                </div>
            </form>
            <ComponentNavMobile/>
        </div>
    )
}

export default AdminPageAdd;