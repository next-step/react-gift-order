import { createRoot } from "react-dom/client";
import "./index.css";
import "./reset.css";
import App from "./App.tsx";
import "pretendard/dist/web/static/pretendard.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
