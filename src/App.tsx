import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalResetStyle } from "./styles/reset";
import { Global } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme/theme";
import { AuthProvider } from "./contexts/AuthContext";
import RequireAuth from "./components/auth/RequireAuth";
import TestOrderFormPage from "./pages/TestOrderFormPage";
import GiftMain from "./pages/GiftMain";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import MyPage from "./pages/MyPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalResetStyle} />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<GiftMain />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/my"
              element={
                <RequireAuth>
                  <MyPage />
                </RequireAuth>
              }
            />
            <Route path="/test-order-form" element={<TestOrderFormPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
