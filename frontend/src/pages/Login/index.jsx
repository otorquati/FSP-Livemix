import style from "./Login.module.css";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { jwtDecode } from 'jwt-decode';
function Login() {
  const [name,setName] =useState();
  const [email,setEmail] =useState();
  const [profilePic,setProfilePic] =useState();
  const [isLoggedIn,setIsLoggedIn] =useState(false);
  return (
    <>
      <div className={style.login}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse)
            console.log(jwtDecode(credentialResponse.credential))
            const decode = jwtDecode(credentialResponse.credential)
            setName(decode.name)
            setEmail(decode.email)
            setProfilePic(decode.picture)
            setIsLoggedIn(true)
          }
        }
          onError={() => console.log("Falha no Login")}
        />
        { isLoggedIn ? (
          <div className={style.login}>
          {console.log(profilePic)}
        <img src={ profilePic } className={style.img}alt="Profile" />
        <p>Nome: {name}</p>
        <p>Email: {email}</p> 
      </div> ) : ("")}
      </div>
    </>
  );
}
{
  /*
    </div>
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
      </>
    );
  }
    */
}
export default Login;
