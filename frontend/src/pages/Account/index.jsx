import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Account.module.css";
function Account() {
  return (
    <>
      <Header />
      <Container>
        <div className={styles.account}>
          <h2>Gestão de Contas</h2>
          <form action="" className={styles.campos}>
            <input type="text" name="nome" placeholder="Nome" />
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="pwd1" placeholder="Sua senha" />
            <input
              type="password"
              name="pwd2"
              placeholder="confirme sua senha"
            />
            <div className={styles.seletor}>
              <h4>Tipo</h4>
              <select name="tipo" id="tipo">
                <option value="admin">Administrador</option>
                <option value="user">Usuário</option>
              </select>
            </div>
            <div className={styles.botoes}>
              <button className={styles.save}>Salvar</button>
              <button className={styles.cancel}>Cancelar</button>
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
}
export default Account;
