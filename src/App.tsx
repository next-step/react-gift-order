import GlobalStyle from "@/styles/GlobalStyle";
import { ThemeProvider } from "@emotion/react";
import theme from "@/styles/theme/theme";
import { BrowserRouter } from "react-router-dom";
import Routes from "@/components/routes/Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
