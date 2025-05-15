import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Listening from "../../assets/LiveMixDJ-removebg.png"
import './style.css';
import Container from "../../components/Container";
function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className="home">
          <div>
            <p>
              Bem-vindo ao seu caderninho <span>Livemix</span>
              <br />
              O local certo para você marcar suas músicas <br />
              preferidas enquanto ouve o <span>LiveMix</span>
            </p> 
          </div>
          <figure>
            <img src={Listening} alt="" />
          </figure>
        </section>
      </Container>
      <Footer />
    </>
  );
}
export default Home