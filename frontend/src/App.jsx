import "./App.css";
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
    <>
      <AppRoutes />
    </>
  );
}

export default App;
