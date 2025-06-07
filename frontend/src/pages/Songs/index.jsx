import { useState, useEffect } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from "../../components/Container/index";
import SongTableList from "../../components/SongTableList";
import "./style.css";
import api from "../../services/api.js";

function Songs() {
  const [songsDb, setSongsDb] = useState([]);
  async function getSongs() {
    const songsFromApi = await api.get('/songs');
    setSongsDb(songsFromApi.data);
  }
  useEffect(() => {
        getSongs();
  }, []);
  

  return (
    <>
    <Header />
        <Container>
          <div className="songs__header">
            <h2 className="songs">Músicas Tocadas</h2>
          </div>
          <SongTableList songs={ songsDb } />
        </Container>
        <Footer />
    </>
  );
}

export default Songs;
