import styles from "./Header.module.css";
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo-LiveMix.png'
import PlayIcon from "../../assets/play_icon.png"
function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <span>Notebook LiveMix</span>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Account">Perfil</Link>
        <Link to="/Playlist">Edições</Link>
        <Link to="/Favorites">Caderninho</Link>
        <Link to="/About">Sobre</Link>
      </nav>
      <Link to="/Login">
        <img src={PlayIcon} className={styles.playicon} alt="Login for play" />
      </Link>
    </header>
  );
}
export default Header;
