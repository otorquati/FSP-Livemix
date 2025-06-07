import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./style.css";
import { Calendar } from "rsuite";
import Star from "../../assets/star.svg";
import NoStar from "../../assets/Pictogrammers-Material-Light-Star.32.png";
import CirclePlay from "../../assets/circle-play.svg";
import api from "../../services/api.js";
import { useEffect, useState } from "react";
function Playlist() {
  const [playlistDb, setPlaylistDb] = useState([]);
  async function getPlaylist() {
    const playlistFromApi = await api.get('/playlist');
    setPlaylistDb(playlistFromApi.data);
  }
    useEffect(() => {
          getPlaylist();
    }, []);

  /* const edicao = [
    {
      id: "100",
      edicaoId: "848",
      order: "1",
      Artista: "Avici",
      Titulo: "Levels",
      sampleUrl: "http://www.centraldj.com.br/freeconnection/434",
      preferida: true,
    },
    {
      id: "200",
      edicaoId: "848",
      order: "2",
      Artista: "David Guestta",
      Titulo: "Bad",
      sampleUrl: "http://www.centraldj.com.br/freeconnection/434",
      preferida: true,
    },
    {
      id: "300",
      edicaoId: "848",
      order: "3",
      Artista: "Lady Gaga",
      Titulo: "Alejandro",
      sampleUrl: "http://www.centraldj.com.br/freeconnection/434",
      preferida: false,
    },
    {
      id: "400",
      edicaoId: "848",
      order: "4",
      Artista: "Madonna",
      Titulo: "Everybody",
      sampleUrl: "http://www.centraldj.com.br/freeconnection/434",
      preferida: true,
    },
    {
      id: "500",
      edicaoId: "848",
      order: "5",
      Artista: "Donna Summer",
      Titulo: "Our Love",
      sampleUrl: "http://www.centraldj.com.br/freeconnection/434",
      preferida: true,
    },
  ]; */
  return (
    <>
      <Header />
      <Container>
        <section className="playlist">
          <h2>Playlist das Edições</h2>

          <div className="items">
            <div className="calendar">
              <Calendar compact bordered />
            </div>
    
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}
export default Playlist;
