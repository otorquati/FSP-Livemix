import style from "./Login.module.css";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GoogleIcon from "../../assets/Arturo-Wibawa-Akar-Google.svg";

function Login() {
  return (
    <>
      <Header />
      <Container>
        <form action="" className={style.login}>
          <h2>Login Page</h2>
          <div className={style.campos}>
            <input
              type="text"
              name="user"
              placeholder="Nome"
              className={style.inputs}
            />
            <input
              type="email"
              name="user"
              placeholder="seu melhor email"
              className={style.inputs}
            />
            <button className={style.btn}>
              Logar com e-mail
            </button>
            <button className={style.btn}>
              <img
                src={GoogleIcon}
                className={style.icon}
                alt="Logar com google"
              />
              Google
            </button>
          </div>
        </form>
      </Container>
      <Footer />
    </>
  );
}
export default Login;
