import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from '../../components/Container/index';
import { useState } from "react";
import SongTableList from "../../components/SongTableList";
import './style.css'

function Songs() {
const [songsList, setSongsList] = useState([])
const songsDb = ([
    {
      id: "100",
      edicaoId: "848",
      order: "1",
      Artista: "Avici",
      Titulo: "Levels",
      sampleUrl: "http://www.centraldj.com.br/freeconnection/434",
      duracao: "4:30",
      preferida: true,
    },
    {
      id: "200",
      edicaoId: "848",
      order: "2",
      Artista: "David Guestta",
      Titulo: "Bad",
      sampleUrl: "http://www.centraldj.com.br/freeconnection/434",
      duracao: "2:50",
      preferida: true,
    },
    {
      id: "300",
      edicaoId: "848",
      order: "3",
      Artista: "Lady Gaga",
      Titulo: "Alejandro",
      sampleUrl: "http://www.centraldj.com.br/freeconnection/434",
       duracao: "3:45",
      preferida: false,
    },
    {
      id: "400",
      edicaoId: "848",
      order: "4",
      Artista: "Madonna",
      Titulo: "Everybody",
      sampleUrl: "http://www.centraldj.com.br/freeconnection/434",
       duracao: "3:30",
      preferida: true,
    },
    {
      id: "500",
      edicaoId: "848",
      order: "5",
      Artista: "Donna Summer",
      Titulo: "Our Love",
      sampleUrl: "http://www.centraldj.com.br/freeconnection/434",
       duracao: "2:30",
      preferida: true,
    },
  ]);

  if (!songsList.length) {
    setSongsList(songsDb)
  }
console.log(songsDb)
	return (
		<>
		<Header />
		<Container>
      <div className="songs__header">
			  <h2 className="songs">Músicas Tocadas</h2>

        <div className="songs__edition">
          <label htmlFor="Edição">Edição n</label>
          <input type="number" atl="Edição" />
        </div>
      </div>
				<SongTableList Songs={songsDb}/>
		</Container>
		<Footer />
		</>
	)
}

export default Songs;