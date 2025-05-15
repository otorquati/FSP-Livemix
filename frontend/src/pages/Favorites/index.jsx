import CardFavorite from "../../components/CardFavorites";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./style.css";
function Favorites() {
  return (
    <>
      <Header />
      <Container>
        <div className="favorites">
          <h1>Preferidas do Ano</h1>
        </div>
        <CardFavorite />
      </Container>
      <Footer />
    </>
  );
}
export default Favorites;
