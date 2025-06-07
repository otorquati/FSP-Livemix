import "./style.css";
import Star from "../../assets/star.svg";
import CirclePlay from "../../assets/circle-play.svg";
function SongTableList({ songs }) {
  return (
    <>
      <div className="tablelist">
        <table className="songtable">
          <thead>
            <tr>
              <th>Artista</th>
              <th>Título</th>
              <th>Amostra</th>
              <th>Capa</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => (
              <tr key={song.id}>
                <td>{song.Artist}</td>
                <td>{song.title}</td>
                <td><a href={song.sampleAddr}></a>
                  <button>
                  <img src={CirclePlay} className="star" alt="Preferida" />
                  </button>
                </td>
                <td><img className="cover" src={song.coverImage} alt="Imagem de Capa" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SongTableList;
