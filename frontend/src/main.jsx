import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "rsuite/dist/rsuite.min.css";
import { CustomProvider } from "rsuite";
import ptBR from "rsuite/locales/pt_BR";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
const ClientSecret = import.meta.env.VITE_GOOGLE_CLIENT_ID;
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomProvider theme="dark" locale={ptBR}>
      <GoogleOAuthProvider clientId={ClientSecret}>
        <App />
      </GoogleOAuthProvider>
    </CustomProvider>
  </StrictMode>
);
