import Logo from "../assets/seb's2.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "../css/Footer.css";

function ComponentFooter() {
  return (
    <footer className="footer">
      <div className="footer_img">
        <img src={Logo} alt="logo" />
      </div>
      <div className="barra"></div>
      <div className="footer_redes">
        <h2>Acompanhe nossas redes social</h2>
        <div className="rede">
          <a href="">
            <RiInstagramFill />
          </a>
          <a href="">
            <FaYoutube />
          </a>
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default ComponentFooter;
