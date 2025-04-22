import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './Favorites.module.css'
function Favorites () {
	return (
		<>
		<Header />
		<Container>
			<section className={styles.favorites}>
				<h1>Preferidas do Ano</h1>
				<div className='cardFavorites'>
				<h2>Artista</h2>
				<p>Título</p>
				</div>
			</section>
		</Container>
		<Footer />
		</>
	)
}
export default Favorites