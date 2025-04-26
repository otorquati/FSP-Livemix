import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./About.module.css";
import ImgSobre from "../../assets/Logo-Thor4Web.png";
import Container from "../../components/Container";
import CentralDjLogo from "../../assets/CentralDJ_Logo.png"
function About() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.about}>
          <div>
            <img src={ImgSobre} alt="" className={styles.thorweb}/>
          </div>
          <div>
            <h1>Sobre o caderninho...</h1>
            <p>
              Este caderninho foi desenvolvido para auxiliar os ouvintes do
              programa <span>LiveMix</span> <br />
              na escolha de suas músicas preferidas visando a eleição das 50
              melhores do ano.
            </p>
            <br/>
            <h2>Acesse a Central DJ para ouvir os set</h2>
            <a href="https://www.centraldj.com.br/livemix" target="_blank" rel="external">
              <img className={styles.logo} src={CentralDjLogo} alt="Logo Central DJ" />
            </a>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}
export default About;
