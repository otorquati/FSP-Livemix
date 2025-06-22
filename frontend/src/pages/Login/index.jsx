import { useRef, useState, useEffect } from "react";
import AppRoutes from "../../routes";
import "./style.css";
import Container from "../../components/Container/index";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section className="Home">
          {/*    <h1>Você está logado!</h1>
      <br />
      <p>
        {/*<a href="/">Vá para a casa</a>
      </p>*/}
          <AppRoutes />
        </section>
      ) : (
        <Container>
          <section>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Entrar</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Nome do usuário:</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                ref={userRef}
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <button>Entrar</button>
            </form>
            <p>
              Precisa de uma conta?
              <br />
              <span className="line">
                <a href="/Register">Inscreva-se</a>
              </span>
            </p>
          </section>
        </Container>
      )}
    </>
  );
};

export default Login;
