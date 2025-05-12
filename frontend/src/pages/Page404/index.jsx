import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import "./style.css";
function Page404 () {
	return (
		<>
		<Header />
		<Container>
			<h1 className="title2">Ah não, algo deu errado!</h1>
			<div className="textos">
				<span className="text_xl">404</span> <br/>
				<strong className="red_text">Página não encontrada</strong>
			</div>
		</Container>
		<Footer />
		</>
	)
}
export default Page404
