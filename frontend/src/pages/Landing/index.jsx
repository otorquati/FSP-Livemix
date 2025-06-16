import "./style.css";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/googleicon-48.png";
// import googleIcon from "../../assets/googleicon-48.png"
function Landing() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [profilePic, setProfilePic] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigates = useNavigate();
  return (
    <div>
      <form action="" className="login">
        <h2>Login Page</h2>
        <div className="campos">
          <input
            type="text"
            name="user"
            placeholder="Nome"
            className="inputs"
          />
          <input
            type="email"
            name="email"
            placeholder="seu melhor email"
            className="inputs"
          />
          <input
            type="password"
            name="senha"
            placeholder="sua senha"
            className="inputs"
          />
          <div className="lnk">
          <button>Cadastrar</button>
          <button>Esqueci minha senha</button>
          </div>
          <button className="btn">Logar com e-mail</button>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decode = jwtDecode(credentialResponse.credential);
              setName(decode.name);
              setEmail(decode.email);
              setProfilePic(decode.picture);
              setIsLoggedIn(true);
              navigates("/");
            }}
            onError={() => console.log("Falha no Login")}
          />
        </div>
      </form>

      {isLoggedIn ? (
        <div className="login">
          <img src={profilePic} className="img" alt="Profile" />
          <p>Nome: {name}</p>
          <p>Email: {email}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
{
  /*
    </div>
      <Container>
        <form action="" className=login}>
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
      </>
    );
  }
    */
}
export default Landing;
