import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@src/index.css";
import App from "@src/App.tsx";

createRoot(document.getElementById("root")!).render(
  //Strict mode disabled for preventing double calls for useEffect
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <App />
);
