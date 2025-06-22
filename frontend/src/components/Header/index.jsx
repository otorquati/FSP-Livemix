import "./style.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo-LiveMix.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="cabecalho">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <span>Notebook LiveMix</span>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Account">Conta</Link>
        <Link to="/Playlist">Edições</Link>
        <Link to="/Songs">Músicas</Link>
        <Link to="/Favorites">Caderninho</Link>
        <Link to="/About">Sobre</Link>
      </nav>
      <div>
        <Link to='/Login'>
          <FontAwesomeIcon className="Link" icon={faCirclePlay} />
        </Link>
      </div>
    </header>
  );
}
export default Header;
