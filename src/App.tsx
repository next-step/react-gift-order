import GlobalStyle from "@/styles/GlobalStyle";
import { ThemeProvider } from "@emotion/react";
import theme from "@/styles/theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gift from "@/pages/Gift";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_PATH.HOME} element={<Gift />} />
          <Route path={ROUTE_PATH.LOGIN} element={<Login />} />
          <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export const ROUTE_PATH = {
  HOME: "/",
  LOGIN: "/login",
  NOT_FOUND: "*",
} as const;

export default App;
