import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "@/App"
import GlobalStyle from "./styles/GlobalStyle"
import { ThemeProvider } from "@emotion/react"
import theme from "./styles/theme"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
)
