import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Listening from "../../assets/LiveMixDJ-removebg.png";
import "./style.css";
import Container from "../../components/Container";
import Landing from "../Landing";
function Home() {
  return (
    <>
      <Header />
  
        <div className="home">
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
        </div>
      <Footer />
    </>
  );
}
export default Home;
