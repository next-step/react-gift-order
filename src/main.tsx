import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App.tsx";

import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/theme";
import { AuthProvider } from "@/contexts/AuthContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
);
