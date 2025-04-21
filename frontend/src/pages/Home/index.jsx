import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Listening from "../../assets/LiveMixDJ-removebg.png"
import styles from './Home.module.css';
function Home() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div>
          <p>
            Bem-vindo ao seu caderninho <span>Livemix</span>
            <br />
            O local certo para você marcar suas músicas <br />
            preferidas enquanto ouve o <span>LiveMix</span>
          </p>
          <button className={styles.btn}>Login</button>
        </div>
        <figure>
          <img src={Listening} alt="" />
        </figure>
      </section>
      <Footer />
    </>
  );
}
export default Home