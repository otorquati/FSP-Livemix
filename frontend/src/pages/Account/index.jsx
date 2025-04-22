import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from "./Account.module.css"
function Account () {
	return (
		<>
		<Header />
		<section className={styles.container}>
			<h1>Gestão de Contas</h1>
		</section>
		<Footer />
		</>
	)
}
export default Account