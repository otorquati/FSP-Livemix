import "./style.css";
import thorWeb from "../../assets/Logo-Thor4Web.png";
function Footer() {
  return (
    <div className="rodape">
      <p>Desenvolvido por </p>
      <img src={thorWeb} alt="logo Thor4Web" className="logo" />
    </div>
  );
}
export default Footer;
