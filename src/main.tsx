import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Global, ThemeProvider } from "@emotion/react";
import { GlobalResetStyle } from "@styles/index";
import { theme } from "@styles/index";
import { Container } from "@/components/layout/Container";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalResetStyle} />
      <Container>
        <App />
      </Container>
    </ThemeProvider>
  </StrictMode>,
);
