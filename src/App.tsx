import { Global, ThemeProvider, css } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import resetStyles from "@/reset";
import theme from "./styles/theme";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { ViewportContainer } from "./App.styles";
import { AuthProvider } from "./contexts/AuthContext";
import MyPage from "./pages/MyPage/MyPage";
import { ROUTES } from "./constants/routes";
import OrderPage from "./pages/OrderPage/OrderPage";

const globalStyles = css`
  body {
    font-family: "Pretendard", Pretendard, sans-serif;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Global styles={[resetStyles, globalStyles]} />
        <ViewportContainer>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.MY} element={<MyPage />} />
            <Route path={ROUTES.ORDER} element={<OrderPage />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
          </Routes>
        </ViewportContainer>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
