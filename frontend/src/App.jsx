import "./App.css";
import Login from "./pages/Login"
import ErrorBoundary from "./ErrorBoundary"

function App() {
  return (
    <ErrorBoundary>
      <main className="App">
        <Login /> 
      </main>
    </ErrorBoundary>
  );
}

export default App;
