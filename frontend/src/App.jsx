import "./App.css";
import googleButton from "./assets/btn_google_signin_dark_pressed_web.png";
import AppRoutes from "./routes";

function navigate(url) {
  window.location.href = url;
}

async function auth() {
  const response = await fetch("http://127.0.0.1:3000/request", {
    method: "post",
  });
  const data = await response.json();
  console.log(data);
  navigate(data.url);
}

function App() {
  return (
    <>{/*}
      <div className="loginpage">
        <h1>Bem-vindo a T4Web</h1>
        <h3>Faça login com sua conta Google</h3>
        <button type="button" onClick={() => auth()}>
          <img src={googleButton} alt="google sign in" />
        </button>
      </div>*/}
      <AppRoutes />
    </>
  );
}

export default App;
