import "./style.css";
import React from "react";
import Songs from "../../pages/Songs/index";
function SongTableList({ Songs }) {
  return (
    <>
      <div className="tablelist">
        <table className="songtable">
          <thead>
            <tr>
              <th>Ordem</th>
              <th>Artista</th>
              <th>Título</th>
              <th>Amostra</th>
              <th>Duração</th>
              <th>Favorita</th>
            </tr>
          </thead>
          <tbody>
            {Songs.map((song) => (
              <tr>
                <td>{song.order}</td>
                <td>{song.Artista}</td>
                <td>{song.Titulo}</td>
                <td>{song.sampleUrl}</td>
                <td>{song.duracao}</td>
                <td>{song.preferida}</td>
                <button className="btn_favorite"></button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SongTableList;
