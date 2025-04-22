import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './Page404.module.css'
function Page404 () {
	return (
		<>
		<Header />
		<Container>
			<h1 className={styles.title2}>Ah não, algo deu errado!</h1>
			<div className={styles.textos}>
				<span className={styles.text_xl}>404</span> <br/>
				<strong className={styles.red_text}>Página não encontrada</strong>
			</div>
		</Container>
		<Footer />
		</>
	)
}
export default Page404
