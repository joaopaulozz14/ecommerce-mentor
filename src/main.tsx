import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DataProvider } from "./context/index.tsx";

createRoot(document.getElementById("root")!).render(
  <DataProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </DataProvider>
);
