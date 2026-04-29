import "../css/Login.css";
import Logo from "../assets/seb's2.png";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { LiaEyeSlashSolid } from "react-icons/lia";
import { LiaEyeSolid } from "react-icons/lia";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ComponentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spanErro, setSpanErro] = useState("");
  const navigate = useNavigate();

  async function handlerSubmit(e) {
    e.preventDefault();

    const response = await fetch("https://api-lancher.onrender.com/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if(!response.ok) {
      return setSpanErro("Senha ou email incorreto");
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);


    alert("seja bem vindo!");

    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }

  const [mostrar, setMostar] = useState(false);
  return (
    <div className="container_login">
      <div className="login">
        <div className="title_login">
          <img src={Logo} alt="logo" />
          <h2>Acesse sua conta</h2>
        </div>
        <form className="inputs" onSubmit={handlerSubmit}>
          <div className="input">
            <span>
              <FaUser />
            </span>
            <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="input">
            <span>
              <RiLockPasswordFill />
            </span>
            <input
              type={!mostrar ? "text" : "password"}
              placeholder="Digite sua senha"
             onChange={(e) => setPassword(e.target.value)}/>
            <div className="check">
              <button onClick={() => setMostar(!mostrar)}>
                {mostrar ? <LiaEyeSolid /> : <LiaEyeSlashSolid />}
              </button>
              <div className="text1">
                <span>esqueci a senha</span>
              </div>
            </div>
          </div>
          <div className="button">
            <button type="submit">Entrar</button>
          </div>
        </form>
        <div className="erro">
          <span>{spanErro}</span>
        </div>
        <div className="text">
          <span>Não tenho uma conta </span>
          <Link to="/cadastro">
            <a href=""> Fazer Cadastro</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ComponentLogin;
