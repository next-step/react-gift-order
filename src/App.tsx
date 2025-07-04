import "@/App.css";
import "@/components/Main";
import { theme } from "@/styles/theme.ts";
import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import Login from "@/components/Login.tsx";
import Main from "@/components/Main.tsx";
import NavigationBar from "@/components/NavigationBar";
import NotFound from "@/components/NotFound";
import Layout from "@/styles/Layout.tsx";
import MyPage from "@/components/MyPage.tsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <NavigationBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
