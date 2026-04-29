import "../css/Cadastro.css";
import Logo from "../assets/seb's2.png";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { LiaEyeSlashSolid } from "react-icons/lia";
import { LiaEyeSolid } from "react-icons/lia";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ComponentCadastro() {
  const [mostrar, setMostar] = useState(false);
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ spanErro, setSpanErro ] = useState("");
  const navigate = useNavigate();

  async function handlerSubmite(e) {
    e.preventDefault();

    const response = await fetch("https://api-lancher.onrender.com/user", {
        method: "POST",
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify({ name, email, password})
    });
        if(!response.ok) {
            setSpanErro("Email já cadastrado ou senha mal digitada")
            setEmail("");
            setName("");
            setPassword("");
        } else {
            alert("Cadastro feito com sucesso!");
        }
    
    setTimeout(() => {
      navigate("/login")
    }, 4000)
    
  }

  return (
    <div className="container_cadastro">
      <div className="cadastro">
        <div className="title_cadastro">
          <img src={Logo} alt="logo" />
          <h2>Acesse sua conta</h2>
        </div>
        <form className="inputs_cadastro" onSubmit={handlerSubmite}>
          <div className="input_cadastro">
            <span>
              <FaUser />
            </span>
            <input type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="input_cadastro">
            <span>
              <FaUser />
            </span>
            <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="input_cadastro">
            <span>
              <RiLockPasswordFill />
            </span>
            <input
              type={!mostrar ? "text" : "password"}
              placeholder="Digite sua senha"
             onChange={(e) => setPassword(e.target.value)}/>
            <div className="check_cadastro">
              <button onClick={() => setMostar(!mostrar)}>
                {mostrar ? <LiaEyeSolid /> : <LiaEyeSlashSolid />}
              </button>
              <div className="text1_cadastro">
                <span>
                  senha deve conter 8 caracteres <br />
                  uma letra maiúscula e numero.
                </span>
              </div>
            </div>
          </div>
          <div className="button_cadastro">
          <button type="submit">Entrar</button>
          <span>{spanErro}</span>
        </div>
        </form>
        <div className="text_cadastro">
          <span>Já tenho uma conta</span>
          <Link to="/login">
            <a href=""> Fazer login</a>
          </Link> 
        </div>
      </div>
    </div>
  );
}

export default ComponentCadastro;
