import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Playlist.module.css";
import { Calendar } from "rsuite";
import Star from "../../assets/star.svg";
import NoStar from "../../assets/Pictogrammers-Material-Light-Star.32.png";
import CirclePlay from "../../assets/circle-play.svg";
function Playlist() {
  const edicao = [
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
      id: "400",
      edicaoId: "848",
      order: "5",
      Artista: "Donna Summer",
      Titulo: "Our Love",
      sampleUrl: "http://www.centraldj.com.br/freeconnection/434",
      preferida: true,
    },
  ];
  return (
    <>
      <Header />
      <Container>
        <section className={styles.playlist}>
          <h2>Playlist das Edições</h2>

          <div className={styles.items}>
            <div className={styles.calendar}>
              <Calendar compact bordered />
            </div>
            <div className={styles.tabela}>
              <table>
                <caption>
                  <h3>{`Músicas Tocadas - Edicao n.${edicao.edicaoId ?? ' 848'}`}</h3>
                </caption>
                {/* Cabeçalho da tabela */}
                <thead>
                  <tr>
                    <th className={styles.ordem}>Ordem</th>
                    <th className={styles.artista}>Artista</th>
                    <th className={styles.titulo}>Título</th>
                    <th className={styles.sampleUrl}> Ouça aqui</th>
                    <th className={styles.preferida}>Preferida</th>
                  </tr>
                </thead>
                {/* Corpo da tabela e os dados */}
                <tbody>
                  {edicao.map((edicao) => (
                    <tr key={edicao.id}>
                      <th>{edicao.order}</th>
                      <td>{edicao.Artista}</td>
                      <td>{edicao.Titulo}</td>
                      <td className={styles.sampleUrl}>
                        <button>
                          <img
                            src={CirclePlay}
                            className={styles.star}
                            alt="Preferida"
                          />
                        </button>
                      </td>
                      <td className={styles.sampleUrl}>
                        <button>
                          {edicao.preferida ? <img src={Star} className={styles.star} alt="preferida"></img> : <img src={NoStar} className={styles.hidestar} alt="preferida"></img>}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}
export default Playlist;
