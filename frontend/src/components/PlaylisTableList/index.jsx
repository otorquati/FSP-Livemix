import Star from "../../assets/star.svg";
import NoStar from "../../assets/Pictogrammers-Material-Light-Star.32.png";
import CirclePlay from "../../assets/circle-play.svg";

function PlaylistTableList(playlistDb) {
  return (
    <div className="tabela">
      <table>
        <caption>
          <h3>Músicas Tocadas</h3>
        </caption>
        {/* Cabeçalho das colunas */}
        <thead>
          <tr>
            <th className="edicao">Edição</th>
            <th className="ordem">Ordem</th>
            <th className="artista">Artista</th>
            <th className="titulo">Título</th>
            <th className="sampleUrl"> Ouça aqui</th>
            <th className="preferida">Preferida</th>
          </tr>
        </thead>
        {/* Corpo da tabela e os dados */}
        <tbody>
          {playlistDb.map((playlist) => (
            <tr key={playlist.edition.editionId}>
              <th>{playlist.edition.editionId}</th>
              <th>{playlist.playlistOrder}</th>
              <td>{playlist.songs.Artist}</td>
              <td>{playlist.songs.title}</td>
              <td className="sampleUrl">
                <a href={playlist.songs.sampleAddr}>
                  <img src={CirclePlay} className="star" alt="Preferida" />
                </a>
              </td>
              <td className="sampleUrl">
                <button>
                  {playlist.preferida ? (
                    <img src={Star} className="star" alt="preferida"></img>
                  ) : (
                    <img
                      src={NoStar}
                      className="hidestar"
                      alt="preferida"
                    ></img>
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default PlaylistTableList;
