import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "rsuite/dist/rsuite.min.css";
import { CustomProvider } from "rsuite";
import ptBR  from "rsuite/locales/pt_BR";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomProvider theme="dark" locale={ptBR}>
      <App />
    </CustomProvider>
  </StrictMode>
);
