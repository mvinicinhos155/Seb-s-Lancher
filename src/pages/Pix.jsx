import "../css/Index.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Pix () {

    const [ pix, setPix ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token")
        const getPix = async () => {
            const response = await fetch("https://api-lancher.onrender.com/pix", {
                headers: { "Authorization" : `Bearer ${token}`}
            });
            const data = await response.json();
            setPix(data.result);
        };

        getPix();
    }, []);

    const total = localStorage.getItem("total") 
    console.log(total);

    function CopiarColar () {
        navigator.clipboard.writeText(pix.copiaCola);
    }

    function VoltarPage() {
        setTimeout(() => {
            navigate("/")
        }, 2000)
    }

    return (
        <div className="container_pix">
            <div className="title">
                <h1>Pix</h1>
            </div>
            <div>
                <h3>
                     total: R$ {total}.00   
                </h3> 
            </div>
            <div className="qrcode">
                <img src={`data:image/png;base64,${pix.qrCode}`} alt="QR Code Pix" />
            </div>
            <div className="copiacola">
                <span>{pix.copiaCola}</span>
                <button onClick={CopiarColar}>Copiar</button>
            </div>
            <div className="voltar">
                <button onClick={VoltarPage}>Voltar</button>
            </div>
        </div>
    )
}

export default Pix