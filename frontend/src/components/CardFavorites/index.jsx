import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faTrash,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";
import Player from "../Player";
import imagemCapa from "../../assets/Logo-LiveMix.png";

const CardFavorite = () => {
  return (
    <div>
      <div className="cardfavorites">
        <div className="imagem_capa">
          <img src={imagemCapa} className="imagem_capa" alt="Capa da música" />
        </div>
        <div className="cardfavorites_metadata">
          <h3>Artista</h3>
          <p>Título</p>
      {/*}    <div>
            <a href="#">Ouça aqui</a>
            <FontAwesomeIcon icon={faHeadphones} />
          </div>*/}
        </div>
        <div className="ranking">
          <FontAwesomeIcon className="ranking" icon={faStarOfLife} />
          <FontAwesomeIcon className="ranking trash" icon={faTrash} />
        </div>
      </div>
      <div className="player">
        <Player />
      </div>
    </div>
  );
};

export default CardFavorite;
