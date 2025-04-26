import styles from "./Footer.module.css";
import thorWeb from "../../assets/Logo-Thor4Web.png";
function Footer() {
  return (
    <div className={styles.footer}>
      <p>Desenvolvido por </p>
      <img src={thorWeb} alt="logo Thor4Web" className={styles.logo} />
    </div>
  );
}
export default Footer;
