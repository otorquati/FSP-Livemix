import styles from "./Header.module.css";
import logo from '../../assets/Logo-LiveMix.png'
function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" />
      <span>Notebook LiveMix</span>
      <nav>
        <a href="">Perfil</a>
        <a href="">Edições</a>
        <a href="">Playlists</a>
        <a href="">Preferidas</a>
        <a href="">Sobre</a>
      </nav>
    </header>
  );
}
export default Header;
