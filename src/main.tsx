import "pretendard/dist/web/static/pretendard.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import theme from "@/styles/theme/index";
import App from "@/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
