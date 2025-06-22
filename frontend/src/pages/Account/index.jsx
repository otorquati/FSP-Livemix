import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./style.css";

function Account() {
  return (
    <>
      <Header />
      <Container>
        <div className="account">
          <h2>Gestão de Contas</h2>
          <form>
            <label htmlFor="username">Nome do Usuário:</label>
            <input
              type="text"
              id="username"
              placeholder="digite seu nome"
              autoComplete="off"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="digite aqui seu melhor email"
              autoComplete="off"
              required
            />
            <label htmlFor="pwd">Senha:</label>
            <input type="password" name="pwd1" placeholder="Sua senha" required/>
            <label htmlFor="pwd">Confirme sua senha:</label>
            <input
              type="password"
              name="pwd2"
              placeholder="confirme sua senha"
              required
            />
            <div className="seletor">
              <h4>Tipo</h4>
              <select name="tipo" id="tipo">
                <option value="admin">Administrador</option>
                <option value="user">Usuário</option>
              </select>
            </div>
            <div className="botoes">
              <button className="save">Salvar</button>
              <button className="cancel">Cancelar</button>
            </div>
          </form>
          </div>
      </Container>
      <Footer />
    </>
  );
}
export default Account;
